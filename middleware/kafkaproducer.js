'use strict'

const uuid = require('node-uuid')
const producer = require('../app/producer.js')

module.exports = setup

// // //

/**
 * When the id in request url is equal to 'me', then the id is replaced by the authenticated user's id
 * @return {Function} middleware
 */
function setup () {
  /**
   * Middleware
   * @param  {Object}   req  Express request
   * @param  {Object}   res  Express response
   * @param  {Function} next Express next handler
   * @returns {void}
   */
  return function middleware (req, res, next) {
    if (req.method === 'POST') {
      let reqpayload = req.body
      let data = Object.assign({}, reqpayload, {time: `${new Date().toTimeString()}`, uuid: `${uuid.v4()}`})
      producer.send('napisp', JSON.stringify(data), 0, 0, '0')
      req.body = data
      res.set('x-request-id', data.uuid)
    }
    next()
  }
}
