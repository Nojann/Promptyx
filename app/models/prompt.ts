import { DateTime } from 'luxon'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, belongsTo, hasMany } from '@adonisjs/lucid/orm'
import Instruction from '#models/instruction'
import Context from '#models/context'
import GenerativeAlgorithm from '#models/generative_algorithm'
import OutputParameter from '#models/output_parameter'
import Output from '#models/output'
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
  declare generativeAlgorithmId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Instruction, { foreignKey: 'instructionId' })
  declare instruction: BelongsTo<typeof Instruction>

  @belongsTo(() => Context, { foreignKey: 'contextId' })
  declare context: BelongsTo<typeof Context>

  @belongsTo(() => GenerativeAlgorithm, { foreignKey: 'generativeAlgorithmId' })
  declare generativeAlgorithm: BelongsTo<typeof GenerativeAlgorithm>

  @belongsTo(() => OutputParameter, { foreignKey: 'outputParameterId' })
  declare outputParameter: BelongsTo<typeof OutputParameter>

  @hasMany(() => Output, { foreignKey: 'outputId' })
  declare outputs: HasMany<typeof Output>
}
