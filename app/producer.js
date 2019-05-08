'user strict'

const { NProducer } = require('sinek')
const config = require('../config')
const producerConfiguration = {
  noptions: {
    // 'debug': 'all',
    'metadata.broker.list': config.kafka.url,
    'client.id': config.kafka.id,
    'compression.codec': config.kafka.codec,
    'socket.keepalive.enable': config.kafka.keepalive,
    'api.version.request': config.kafka.api,
    'queue.buffering.max.ms': config.kafka.buffering,
    'batch.num.messages': config.kafka.batchnum,
    'broker.version.fallback': '0.10.2.1',
    'log.connection.close': false
  },
  tconf: {
    'request.required.acks': config.kafka.ack
  },
}
// ammount of partitions of the topics this consummer produces to
const partitionCount = 1 // all message to partition 0

const producer = new NProducer(producerConfiguration, null, partitionCount)

/* sample Promise base Producer
const ProducerStartup = async () => {
  producer.on('error', error => console.error(error))
  await producer.connect()
    .then((async () => {
      await producer.enableAnalytics()
      await producer.send('napisp', JSON.stringify('{"name": "tuanna47", "comment": "system alright"}'), 0, 'arvo', '0').catch(console.error)
      await producer.send('napisp', JSON.stringify('{"name": "tuanna47", "comment": "system alright"}'), 0, 'arvo', '0').catch(console.error)
      await producer.send('napisp', JSON.stringify('{"name": "tuanna47", "comment": "system alright"}'), 0, 'arvo', '0').catch(console.error)
      await producer.getTopicList()
    })().catch(console.error))

}
 */

module.exports = producer
