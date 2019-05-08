class Producer {
  constructor (producer) {
    this.producer = producer
    this.offset = null

    this.test = async () => {
      this.producer.on('error', error => console.error(error))
      await this.producer.connect()
        .catch(console.error)
        .then(
          this.offset = async () => {
            await this.producer.send('napisp', JSON.stringify('{"name": "tuanna47", "comment": "system alright"}'), 0, 'arvo', '0')
              .catch(console.error)
              .then(this.producer.getMetadata())
          }
        )
    }
  }

  test (res, next) {
    this.test()
      .then(collection => res.status(200).json(collection))
      .catch(err => next(err))
  }

  getinfo (res, next) {
    (async () => {
      this.producer.on('error', error => console.error(error))
      await this.producer.connect()
        .catch(console.error)
        .then(
          await this.producer.getMetadata()
            .catch(console.error)
        )
    })()
      .catch(err => next(err))
      .then(collection => res.status(200).json(collection))
  }
}

module.exports = Producer
