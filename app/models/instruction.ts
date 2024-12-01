import { DateTime } from 'luxon'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Prompt from '#models/prompt'

export default class Instruction extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare instructionName: string

  @column()
  declare instructionDescription: string

  @column()
  declare instructionCategory: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Prompt)
  declare prompts: HasMany<typeof Prompt>
}
