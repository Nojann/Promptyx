import { DateTime } from 'luxon'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Prompt from '#models/prompt'

export default class OutputParameter extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare outputFormat: string

  @column()
  declare language: string

  @column()
  declare outputStyle: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Prompt)
  declare prompts: HasMany<typeof Prompt>
}