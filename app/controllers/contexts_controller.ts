import type { HttpContext } from '@adonisjs/core/http'

import Context from '#models/context'
import twoFilesOutputService from '#services/two_files_output_service'
import Prompt from '#models/prompt'
import Instruction from '#models/instruction'
import OutputParameter from '#models/output_parameter'
import GenerativeAlgorithm from '#models/generative_algorithm'

export default class ContextsController {
    async store({ request, response }: HttpContext) {
        console.log('ContextController.store')

        const data = request.only(['contextType', 'contextData', 'filePath', 'fileMimeType'])
        const context = await Context.create(data)

        //Work In Progress
        const instruction = await Instruction.findBy('id', '1')
        const outputParameter = await OutputParameter.findBy('id', '1')
        const generativeAlgorithm = await GenerativeAlgorithm.findBy('id', '1')
        const prompt = await Prompt.create({
            contextId: context.id,
            outputParameterId: outputParameter!.id,
            instructionId: instruction!.id,
            generativeAlgorithmId: generativeAlgorithm!.id
        })

        await prompt.load('context')
        await prompt.load('instruction')
        await twoFilesOutputService(prompt)
        //--

        return response.status(201).json(context)
      }

    async update({ params, request, response }: HttpContext) {
        const context = await Context.findOrFail(params.id)
        const data = request.only(['contextType', 'contextData', 'filePath', 'fileMimeType'])
        context.merge(data)
        await context.save()
        return response.json(context)
    }
}