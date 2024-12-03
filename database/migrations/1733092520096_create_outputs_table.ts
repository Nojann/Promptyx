import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'outputs'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.text('output_content', 'longtext').nullable() // LONGTEXT, NULLABLE
      table.string('file_path', 255).nullable() // VARCHAR(255), NULLABLE
      table.string('file_mime_type', 100).nullable() // VARCHAR(100), NULLABLE
      table.enu('output_type', ['TEXT', 'FILE']).notNullable() // ENUM, NOT NULL

      table
        .integer('prompt_id')
        .unsigned() // Ensures the value is positive
        .notNullable()
        .references('id') // References the foreign key column
        .inTable('prompts') // Name of the referenced table
        .onDelete('CASCADE') // Optional: define behavior on delete
        .onUpdate('CASCADE') // Optional: define behavior on update

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
