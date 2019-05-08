const Controller = require('../../lib/controller')
const producerFacade = require('./facade')

class ProducerController extends Controller {}

module.exports = new ProducerController(producerFacade)
