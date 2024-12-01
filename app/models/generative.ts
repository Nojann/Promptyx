import { DateTime } from 'luxon'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Prompt from '#models/prompt'

export default class Generative extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare modelFamily: string

  @column({ serializeAs: null })
  declare modelName: string

  @column()
  declare modelParameters: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Prompt)
  declare prompts: HasMany<typeof Prompt>
}
