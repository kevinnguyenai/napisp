const Producer = require('../../lib/producer')
const producerFacade = require('./facade')

class ProducerProducer extends Producer {}

module.exports = new ProducerProducer(producerFacade)