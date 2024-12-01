import { DateTime } from 'luxon'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import Instruction from '#models/instruction'
import Context from '#models/context'
import Generative from '#models/generative'
import OutputParam from '#models/output_param'

export default class Prompt extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare instructionId: number

  @column()
  declare contextId: number

  @column()
  declare outputParameterId: number

  @column()
  declare modelId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Instruction, { foreignKey: 'promptId' })
  declare prompt: BelongsTo<typeof Instruction>

  @belongsTo(() => Context, { foreignKey: 'contextId' })
  declare context: BelongsTo<typeof Context>

  @belongsTo(() => Generative, { foreignKey: 'modelId' })
  declare model: BelongsTo<typeof Generative>

  @belongsTo(() => OutputParam, { foreignKey: 'outputParameterId' })
  declare outputParameter: BelongsTo<typeof OutputParam>

  @hasMany(() => Prompt)
  declare prompts: HasMany<typeof Prompt>
}
