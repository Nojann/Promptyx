import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'prompts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
        .integer('instruction_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('instructions')
        .onDelete('CASCADE') // INT, NOT NULL, FK
      table
        .integer('context_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('contexts')
        .onDelete('CASCADE') // INT, NOT NULL, FK
      table
        .integer('output_parameter_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('output_parameters')
        .onDelete('CASCADE') // INT, NOT NULL, FK
      table
        .integer('generative_algorithm_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('generative_algorithms')
        .onDelete('CASCADE') // INT, NOT NULL, FK

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
