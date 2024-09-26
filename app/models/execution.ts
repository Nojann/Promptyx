import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Prompt from '#models/prompt'

export default class Execution extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare promptId: number

  @column()
  declare document: string

  // Erreur avec SQLite

  // @column()
  // declare params: Record<string, any>

  // @column()
  // declare response: Record<string, any>

  @column()
  declare params: string
  @column()
  declare response: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Prompt, { foreignKey: 'promptId' })
  declare prompt: BelongsTo<typeof Prompt>
}
