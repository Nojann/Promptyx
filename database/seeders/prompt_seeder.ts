import GenerativeAlgorithm from '#models/generative_algorithm'
import Prompt from '#models/prompt'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    
    const model = await GenerativeAlgorithm.first()
    if (!model) {
      throw new Error('GenerativeModel must be seeded first')
    }

    await Prompt.create({
      instructionId: 1,
      contextId: 1,
      outputParameterId: 1,
      generativeAlgorithmId: model.id
    })
  }
}
