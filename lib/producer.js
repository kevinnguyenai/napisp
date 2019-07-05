class Producer {
  constructor (producer) {
    this.producer = producer
    this.offset = null
    this.uuid = require('node-uuid')
  }

  request (req, res, next) {
    // let reqdata = Object.assign({}, JSON.parse(req.body), {uuid: `${this.uuid.v4()}`})
    this.producer.send('napisp', JSON.stringify(req.body), Math.round(Math.random(99)), 0, '0')
      .then(res.status(200).send(JSON.stringify('{"error":"sucessful", "request-id": "' + `${req.body.uuid}` + '", "msg": ""}')))
    next()
  }
}

module.exports = Producer
