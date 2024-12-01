import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Context extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare contextData: string | null

  @column()
  declare filePath: string | null

  @column()
  declare fileMimeType: string | null

  @column()
  declare contextType: 'TEXT' | 'FILE'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
