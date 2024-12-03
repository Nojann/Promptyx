import { BaseSeeder } from '@adonisjs/lucid/seeders'
import OutputParameter from '#models/output_parameter'

export default class extends BaseSeeder {
  async run() {
    await OutputParameter.create({
      outputFormat: 'text',
      language: 'fr',
      outputStyle: 'standard'
    })

    await OutputParameter.create({
      outputFormat: 'html',
      language: 'en',
      outputStyle: 'standard'
    })

    await OutputParameter.create({
      outputFormat: 'csv',
      language: 'it',
      outputStyle: 'standard'
    })
  }
}