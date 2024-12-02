import Route from '@adonisjs/core/services/router'

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
const InstructionsController = () => import('#controllers/instructions_controller')
const OutputsController = () => import('#controllers/outputs_controller')

Route.group(() => {
  Route.post('/instruction', [InstructionsController, 'store'])
  Route.get('/instruction/:id', [InstructionsController, 'show'])
  Route.get('/instructions', [InstructionsController, 'index'])
  Route.put('/instruction/:id', [InstructionsController, 'update'])
  Route.delete('/instruction/:id', [InstructionsController, 'destroy'])
}).prefix('/api')

Route.group(() => {
  Route.post('/output', [OutputsController, 'store'])
  Route.get('/output/:id', [OutputsController, 'show'])
  Route.get('/outputs', [OutputsController, 'index'])
  // Route.delete('/output/:id', [OutputsController, 'destroy'])
}).prefix('/api')