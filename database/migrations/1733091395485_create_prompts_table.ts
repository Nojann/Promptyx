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
        .references('instruction_id')
        .inTable('instructions')
        .onDelete('CASCADE') // INT, NOT NULL, FK
      table
        .integer('context_id')
        .unsigned()
        .notNullable()
        .references('context_id')
        .inTable('contexts')
        .onDelete('CASCADE') // INT, NOT NULL, FK
      table
        .integer('output_parameter_id')
        .unsigned()
        .notNullable()
        .references('output_parameter_id')
        .inTable('output_parameters')
        .onDelete('CASCADE') // INT, NOT NULL, FK
      table
        .integer('model_id')
        .unsigned()
        .notNullable()
        .references('model_id')
        .inTable('models')
        .onDelete('CASCADE') // INT, NOT NULL, FK

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
