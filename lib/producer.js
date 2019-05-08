'use strict'

class Producer {
  constructor (facade) {
    this.facade = facade
  }

  start (req, res, next) {
    this.facade.create(JSON.stringify('{"title": "test producer", "body": "system alright"}'))
      .then(doc => res.status(201).json(doc))
      .catch(err => next(err))
  }
}

module.exports = Producer
