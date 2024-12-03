import Route from '@adonisjs/core/services/router'

const ContextController = () => import('#controllers/contexts_controller')
const InstructionController = () => import('#controllers/instructions_controller')

Route.group(() => {
  Route.post('contexts', [ContextController, 'store'])
}).prefix('/api')

Route.group(() => {
  Route.get('instructions', [InstructionController, 'index'])
}).prefix('/api')

/*const ExecutionsController = () => import('#controllers/executions_controller')
const PromptController = () => import('#controllers/prompts_controller_legacy')

Route.group(() => {
  Route.resource('prompts', PromptController).apiOnly()
}).prefix('/api')

Route.group(() => {
  Route.post('/executions', [ExecutionsController, 'store'])
  Route.get('/executions/:id', [ExecutionsController, 'show'])
  Route.delete('/executions/:id', [ExecutionsController, 'destroy'])
}).prefix('/api')*/
