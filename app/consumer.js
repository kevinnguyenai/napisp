'use strict'

const { NConsumer } = require('sinek')
const config = require('../config')

const kafkaTopics = ['napisp']

const consumerConfiguration = {
  noptions: {
    'metadata.broker.list': config.kafka.url,
    'group.id': config.kafka.groupid,
    'enable.auto.commit': false,
    'socket.keepalive.enable': true,
    'api.version.request': true,
    'socket.blocking.max.ms': config.kafka.blockingms
  },
  tconf: {
    'auto.offset.reset': 'earliest'
  }
}

const batchOptions = {
  batchSize: 1000,
  commitEveryNBatch: 1,
  manualBatching: true,
  concurrency: 1,
  commitSync: false,
  noBatchCommits: true,
  sortedManualBatch: true
}

const consumer = new NConsumer(kafkaTopics, consumerConfiguration)

let check = consumer.on('error', error => console.log(error))
if (check._errors === 0) {
  let connector = async () => {
    await consumer.connect()
      .then(console.log('consumer ready'))
  }
  connector().then(info => console.log(info))
  if (connector !== undefined) {
    consumer.consume(async (message, callback) => {
      const topicsPromises = Object.keys(message).map(async (topic) => {
        const partitionPromises = Object.keys(message[topic]).map((partition) => {
          const restmessage = message[topic][partition]
          console.log(restmessage)
          return Promise.resolve()
        })
        await Promise.all(partitionPromises)
        await consumer.commitLocalOffsetsForTopic(topic)
      })
      await Promise.all(topicsPromises)
      callback()
    }, true, false, batchOptions)
  }
}

module.exports = consumer
