const app = require('@/app')

module.exports = async(router) => {
  router.get('/private/subjects/clear',
    app.helpers.routes.func(require('./func.js')))
}