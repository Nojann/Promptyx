import Context from '#models/context'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    const contexts = [
      {
        contextData: 'Sample text context data',
        filePath: null,
        fileMimeType: null,
        contextType: "TEXT" as const    
      },
      {
        contextData: null,
        filePath: '/path/to/sample/file.pdf',
        fileMimeType: 'application/pdf',
        contextType: "FILE" as const
      },
      {
        contextData: 'Another example text context',
        filePath: null,
        fileMimeType: null,
        contextType: "TEXT" as const
      },
      {
        contextData: null,
        filePath: '/path/to/sample/image.jpg',
        fileMimeType: 'image/jpeg',
        contextType: "FILE" as const
      }
    ]

    await Context.createMany(contexts)
  }
}