var Kafka = require('node-rdkafka')

var producer = new Kafka.HighLevelProducer({
  'metadata.broker.list': '42.116.253.249:9092'
})

// Throw away the keys
producer.setKeySerializer(function (v) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(null)
    }, 20)
  })
})

// Take the message field
producer.setValueSerializer(function (v) {
  return Buffer.from(v.message)
})

producer.connect(null, function () {
  producer.produce('napisp', null, {
    message: JSON.stringify('{"name": "tuanna47", "comment": "system alright"}', Date.now())
  }, null, Date.now(), function (err, offset) {
    // The offset if our acknowledgement level allows us to receive delivery offsets
    setImmediate(function () {
      producer.disconnect()
    })
    console.log(err)
    console.log(offset)
  })
})
