
import OpenAI from 'openai'
import Instruction from '#models/instruction'

export default class OpenAIService {
  //Create an instance of the OpenAI client
  private openai: OpenAI

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY || '',
    })
  }

  async generateOutput(contextContent: string, instructions: Instruction): Promise<string> {
    try {
      const instructionDescription = instructions.instructionDescription

      const commandPrompt = `
      #Instruction: ${instructionDescription}
      #Context: ${contextContent}
      Generate the output based on the instruction and the context.
      `

      const completion = await this.openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: commandPrompt }],
      })

      return completion.choices[0].message.content || 'OpenAI error'
      
    } catch (error) {
      console.error("Error during OpenAI API call:", error)
      throw error
    }
  }
}
