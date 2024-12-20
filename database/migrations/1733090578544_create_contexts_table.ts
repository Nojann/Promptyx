import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'contexts'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.text('context_data', 'longtext').nullable() // LONGTEXT, NULLABLE
      table.string('file_path', 255).nullable() // VARCHAR(255), NULLABLE
      table.string('file_mime_type', 100).nullable() // VARCHAR(100), NULLABLE
      table.enu('context_type', ['TEXT', 'FILE']).notNullable() // ENUM, NOT NULL

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
