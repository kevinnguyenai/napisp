const Facade = require('../../lib/facade')
const producerSchema = require('./schema')

class ProducerFacade extends Facade {}

module.exports = new ProducerFacade('Producer', producerSchema)
