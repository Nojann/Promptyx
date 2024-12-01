import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Prompt from '#models/prompt'

export default class Output extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare outputContent: string | null

  @column()
  declare filePath: string | null

  @column()
  declare fileMimeType: string | null

  @column()
  declare outputType: 'TEXT' | 'FILE'

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Prompt, { foreignKey: 'outputParameterId' })
  declare outputParameter: BelongsTo<typeof Prompt>
}
