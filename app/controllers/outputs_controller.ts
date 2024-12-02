import type { HttpContext } from '@adonisjs/core/http'
import Output from '#models/output'


export default class OutputsController {

    /**
     * get all outputs
     */
    async index({ response }: HttpContext) {
        try {
            const outputs = await Output.all()
            return response.json(outputs)

        } catch (error) {
            return response.status(500).json({
                message: 'Failed to retrieve outputs',
                error: error.message,
            })
        }
    }

    /**
    * create output
    */
    async store({ request, response }: HttpContext) {
        try {
            
            //todo

        } catch (error) {
            return response.status(500).json({
                message: 'Failed to create output',
                error: error.message,
            })
           
        }
    }

    /**
    * get output by id
    */
    async show({ params, response }: HttpContext) {
        try {
            const instruction = await Output.findOrFail(params.id)
            return response.status(200).json(instruction)

        } catch (error) {
            return response.status(500).json({
                message: 'Failed to retrieve instruction',
                error: error.message,
            })
        }
    }

}