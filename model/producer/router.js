const controller = require('./controller')
const producer = require('./producer')
const Router = require('express').Router
const router = new Router()

router.route('/')
  .get((...args) => controller.find(...args))
/*
router.route('/:id')
  .put((...args) => controller.update(...args))
  .get((...args) => controller.findById(...args))
  .delete((...args) => controller.remove(...args))
*/

router.route('/request')
  .post((...args) => producer.request(...args))

module.exports = router
