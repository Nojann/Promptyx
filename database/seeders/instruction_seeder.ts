import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Instruction from '#models/instruction'

export default class extends BaseSeeder {
  async run() {
    await Instruction.create({
      instructionName: 'Traduction de texte statique Twig, modèle clefs-valeurs',
      instructionDescription: `Traduit un fichier .html.twig en deux fichiers distincts :
                                - Un fichier .csv avec des traductions ligne par ligne en français, en italien et en anglais.
                                - Un fichier .html.twig refactorisé avec des clés/valeurs.
                                `,
      instructionCategory: 'text'
    })
  }
}