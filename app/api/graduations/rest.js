const app = require('@/app')
const restify = require('express-restify-mongoose')

restify.serve(app.router, app.models.graduation, {
  prefix: '',
  version: '',
  lean: { virtuals: true },
  totalCountHeader: true,
  runValidators: true,
  preRead: [app.helpers.rest.paginate],
  // preCreate: guard.check('users:write'),
  // preUpdate: guard.check('users:write'),
  // preDelete: guard.check('users:write'),
  outputFn: app.helpers.rest.outputFn,
  only: ['list', 'get']
})