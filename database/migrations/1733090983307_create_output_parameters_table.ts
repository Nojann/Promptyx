import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'output_parameters'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('output_format', 50).notNullable() // NOT NULL
      table.string('language', 10).notNullable() // NOT NULL
      table.text('output_style').notNullable() // NOT NULL

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
