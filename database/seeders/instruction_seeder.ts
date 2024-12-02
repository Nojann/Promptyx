import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Instruction from '#models/instruction'
import Prompt from '#models/prompt'

export default class extends BaseSeeder {
  public async run() {
    // Créer des instructions
    const instructions = await Instruction.createMany([
      {
        instructionName: 'Traduction de texte statique Twig, modèle clefs-valeurs',
        instructionDescription: `
          Dans le cadre d'un projet Pimcore exploitant les traductions partagées (Shared Translations), 
          nous avons besoin d'une structure de clés de traduction organisée par pages ou domaines fonctionnels. 
          Cela permet de réduire les doublons et de simplifier la gestion des traductions à long terme.
          
          Pour les clés de traduction Twig, on peut adopter une convention du type :
          
          - Préfixe par page ou domaine fonctionnel : payment_, common_, cart_, ...
          - Utiliser des noms descriptifs : payment_pay_now = Payer maintenant, common_back = Retour
          - Structurer par sous-domaine comme _error ou _message dans la clé :
              - \`payment_error_select_method\` pour "Veuillez sélectionner un mode de paiement".
              - \`payment_message_processing\` pour "Enregistrement de votre paiement en cours, veuillez patienter."
          
          Génère deux fichiers bruts distincts contenant les informations suivantes :
          
          1. Fichier '.html.twig' avec les clés et valeurs réorganisées, respectant la structure définie.
          2. Fichier '.csv' avec des lignes formatées de cette manière :
            \`"payment_error_select_method"\`; "Veuillez sélectionner un mode de paiement"; "Seleziona un metodo di pagamento"
        `,        instructionCategory: 'refactoring i18n',
      },
      {
        instructionName: 'Instruction 2',
        instructionDescription: 'Description pour l\'instruction 2',
        instructionCategory: 'Catégorie 2',
      },
      {
        instructionName: 'Instruction 3',
        instructionDescription: 'Description pour l\'instruction 3',
        instructionCategory: 'Catégorie 3',
      },
    ])

    // Créer des prompts associés aux instructions
    await Prompt.createMany([
      {
        instructionId: instructions[0].id,
        contextId: 1, // Remplacer par un id existant dans la table `contexts`
        outputParameterId: 1, // Remplacer par un id existant dans la table `output_parameters`
        modelId: 1, // Remplacer par un id existant dans la table `models`
      },
      {
        instructionId: instructions[1].id,
        contextId: 2, // Remplacer par un id existant dans la table `contexts`
        outputParameterId: 2, // Remplacer par un id existant dans la table `output_parameters`
        modelId: 2, // Remplacer par un id existant dans la table `models`
      },
    ])
  }
}