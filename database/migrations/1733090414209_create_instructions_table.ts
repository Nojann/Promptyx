import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'instructions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('instruction_name', 255).notNullable() // VARCHAR(255), NOT NULL
      table.text('instruction_description').notNullable() // TEXT, NOT NULL
      table.string('instruction_category', 100).notNullable() // VARCHAR(100), NOT NULL

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
