const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const bluebird = require('bluebird')

const config = require('./config')
const routes = require('./routes')
const kafkaproducer = require('./middleware/middleware').kafkaproducer
const app = express()

// connect to Mongodb
mongoose.Promise = bluebird
mongoose.connect(config.mongo.url, {useNewUrlParser: true})

app.use(helmet())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(kafkaproducer())
app.use('/', routes)

app.listen(config.server.port, () => {
  console.log(`Magic happens on port ${config.server.port}`)
})

module.exports = app
