const controller = require('./controller')
const producer = require('./producer')
const Router = require('express').Router
const router = new Router()

router.route('/')
  .get((...args) => controller.find(...args))
  .post((...args) => controller.create(...args))
/*
router.route('/:id')
  .put((...args) => controller.update(...args))
  .get((...args) => controller.findById(...args))
  .delete((...args) => controller.remove(...args))
*/

router.route('/test')
  .get((...args) => producer.test(...args))

router.route('/getinfo')
  .get((...args) => producer.getinfo(...args))

module.exports = router
