import GenerativeAlgorithm from '#models/generative_algorithm'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await GenerativeAlgorithm.create({
      modelFamily: 'openai',
      modelName: 'gpt-4o',
      modelParameters: '{"temperature": 0.5, "max_tokens": 1000}'
    })
  }
}