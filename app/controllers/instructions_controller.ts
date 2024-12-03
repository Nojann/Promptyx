import type { HttpContext } from '@adonisjs/core/http'
import Instruction from '#models/instruction'

export default class InstructionsController {

    /**
    * get all instructions
    */
    async index({ response }: HttpContext) {
        try {
            const instructions = await Instruction.all()
            return response.status(200).json(instructions)

        } catch (error) {
            return response.status(500).json({
                message: 'Failed to retrieve instructions',
                error: error.message,
            })
        }
    }

    /**
    * create instruction
    */
    async store({ request, response }: HttpContext) {
        try {
            const data = request.only(['instructionName', 'instructionDescription', 'instructionCategory'])
            const instruction = await Instruction.create(data)
            return response.status(201).json(instruction)

        } catch (error) {
            return response.status(500).json({
                message: 'Failed to create instruction',
                error: error.message,
            })
        }
    }

    /**
    * get instruction by id
    */
    async show({ params, response }: HttpContext) {
        try {
            const instruction = await Instruction.findOrFail(params.id)
            return response.status(200).json(instruction)

        } catch (error) {
            return response.status(500).json({
                message: 'Failed to retrieve instruction',
                error: error.message,
            })
        }
    }

    /**
    * update instruction
    */
    async update({ params, request, response }: HttpContext) {
        try{
            const instruction = await Instruction.findOrFail(params.id)
            const data = request.only(['instructionName', 'instructionDescription', 'instructionCategory'])
            instruction.merge(data)
            await instruction.save()
            return response.json(instruction)

        } catch (error) {
            return response.status(500).json({
                message: 'Failed to delete instruction',
                error: error.message,
            })
        }
    }

    /**
    * delete instruction TODO
    */
    // async destroy({ params, response }: HttpContext) {
    //     try {
    //         const instruction = await Instruction.findOrFail(params.id)
    //         // delete instruction
    //         await instruction.delete()

    //     } catch (error) {
    //         return response.status(500).json({
    //             message: 'Failed to delete instruction',
    //             error: error.message,
    //         })
    //     }
    // }
}