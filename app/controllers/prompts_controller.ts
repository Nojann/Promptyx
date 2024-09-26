import type { HttpContext } from '@adonisjs/core/http'
import Prompt from '#models/prompt'

export default class PromptsController {
  /**
   * Afficher une liste de ressources
   */
  async index({ response }: HttpContext) {
    const prompts = await Prompt.all()
    return response.json(prompts)
  }

  /**
   * Gérer la soumission du formulaire pour l'action de création
   */
  async store({ request, response }: HttpContext) {
    console.log('PromptController.store')
    const data = request.only(['name', 'description', 'defaultParams'])
    const prompt = await Prompt.create(data)
    return response.status(201).json(prompt)
  }

  /**
   * Afficher un enregistrement individuel
   */
  async show({ params, response }: HttpContext) {
    const prompt = await Prompt.findOrFail(params.id)
    return response.json(prompt)
  }

  /**
   * Gérer la soumission du formulaire pour l'action de modification
   */
  async update({ params, request, response }: HttpContext) {
    const prompt = await Prompt.findOrFail(params.id)
    const data = request.only(['name', 'description', 'defaultParams'])
    prompt.merge(data)
    await prompt.save()
    return response.json(prompt)
  }

  /**
   * Supprimer un enregistrement
   */
  async destroy({ params, response }: HttpContext) {
    const prompt = await Prompt.findOrFail(params.id)
    await prompt.delete()
    return response.status(204)
  }
}
