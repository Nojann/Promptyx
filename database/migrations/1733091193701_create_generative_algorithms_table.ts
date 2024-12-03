import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'generative_algorithms'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('model_family', 50).notNullable() // VARCHAR(50), NOT NULL
      table.string('model_name', 100).notNullable().unique() // VARCHAR(100), NOT NULL, UNIQUE
      table.text('model_parameters').nullable() // TEXT, NULLABLE

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
