'user strict'

const { NProducer } = require('sinek')
const config = require('../config')
const producerConfiguration = {
  noptions: {
    //'debug': 'all',
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
  }
}

// ammount of partitions of the topics this consummer produces to
const partitionCount = 1 // all message to partition 0

const producer = new NProducer(producerConfiguration, null, partitionCount)

/* sample Promise base Producer 

setInterval(async () => {
  producer.on('error', error => console.log(error))
  let i = 0
  await producer.connect()
    .catch(console.log(this.error))
    .then(
      await producer.send('napisp', JSON.stringify('{"name": "tuanna47", "comment": "system alright"}'), Math.round(Math.random(99)), i++, '0')
    )
}, 1000)
*/
/* testing producer function by uncomment following code section
let file = '{"name": "tuanna47", "comment": "system alright"}'
let check = producer.on('error', error => { return error })
if (check._error === undefined) {
  let connector = async (data = file) => {
    await producer.connect()
      .catch(error => console.log(error))
      .then(() => {
        producer.send('napisp', JSON.stringify(data), Math.round(Math.random(99)), 0, '0')
      })
  }
  connector().then(info => console.log(info))
}
*/
let check = producer.on('error', error => { console.log(error) })
if (check._error === undefined) {
  let connector = async () => {
    await producer.connect()
      .catch(error => {
        console.log(error)
      })
      .then(console.log('producer ready'))
  }
  connector().then(info => console.log(info))
}
module.exports = producer
