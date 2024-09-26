import Route from '@adonisjs/core/services/router'

const ExecutionsController = () => import('#controllers/executions_controller')
const PromptController = () => import('#controllers/prompts_controller')

Route.group(() => {
  Route.resource('prompts', PromptController).apiOnly()
}).prefix('/api')

Route.group(() => {
  Route.post('/executions', [ExecutionsController, 'store'])
  Route.get('/executions/:id', [ExecutionsController, 'show'])
  Route.delete('/executions/:id', [ExecutionsController, 'destroy'])
}).prefix('/api')
