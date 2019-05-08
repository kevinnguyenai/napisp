const Producer = require('../../lib/producer')
const producerState = require('../../app/producer')

class ProducerProducer extends Producer {}

module.exports = new ProducerProducer(producerState)
