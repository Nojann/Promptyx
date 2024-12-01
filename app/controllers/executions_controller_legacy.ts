import type { HttpContext } from '@adonisjs/core/http'
import Execution from '#models/execution_legacy'
import OpenAIService from '#services/openai_service'

export default class ExecutionsController {
  /**
   * Display a list of resource
   */
  //async index({}: HttpContext) {}

  /**
   * Gérer la soumission du formulaire pour l'action de création
   */
  async store({ request, response }: HttpContext) {
    const openaiService = new OpenAIService()
    const data = request.only(['promptId', 'document', 'params'])
    const execution = await Execution.create(data)
    await execution.load('prompt')
    const generatedText = await openaiService.generateText(execution)
    execution.response = generatedText
    await execution.save()
    return response.status(201).json(execution)
  }

  /**
   * Afficher un enregistrement individuel
   */
  async show({ params, response }: HttpContext) {
    // Trouver l'exécution par son ID
    const execution = await Execution.findOrFail(params.id)
    // Charger la relation avec le prompt associé
    await execution.load('prompt')
    // Retourner l'exécution avec ses détails
    return response.json(execution)
  }

  /**
   * Handle form submission for the edit action
   */
  //async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params, response }: HttpContext) {
    // Trouver l'exécution par son ID
    const execution = await Execution.findOrFail(params.id)
    // Supprimer l'exécution
    await execution.delete()
    // Retourner une réponse avec le statut 204 (No Content)
    return response.status(204)
  }
}
