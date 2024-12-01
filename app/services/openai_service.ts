//Import the OpenAI API client
import OpenAI from 'openai'
//import Execution from '#models/execution_legacy'
export default class OpenAIService {
  //Create an instance of the OpenAI client
  private openai: OpenAI

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY || '',
    })
  }

  async generateText(execution: Execution): Promise<string> {
    try {
      // Récupérer le document et le contenu du prompt à partir de execution
      const document = execution.document
      const promptImported = execution.prompt

      // Construire le prompt
      const prompt = `#Prompt: ${promptImported}\n#Document: ${document}`

      // Faire l'appel à OpenAI avec le prompt
      const completion = await this.openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      })

      // Retourner la réponse de l'API
      return completion.choices[0].message.content || 'OpenAI error'
    } catch (error) {
      console.error("Erreur lors de l'appel à OpenAI:", error)
      throw error
    }
  }
}
