import type { HttpContext } from '@adonisjs/core/http'
import Instruction from '#models/instruction'

export default class InstructionsController {
    async index({ response }: HttpContext) {
        console.log("InstructionsController.index")
        const instructions = await Instruction.all()
        return response.json(instructions)
    }
}