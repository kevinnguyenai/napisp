const Router = require('express').Router
const router = new Router()

const user = require('./model/user/router')
const pet = require('./model/pet/router')
const producer = require('./model/producer/router')

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to napisp API!' })
})

router.use('/user', user)
router.use('/pet', pet)
router.use('/producer', producer)

module.exports = router
