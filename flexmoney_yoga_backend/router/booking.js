const express = require('express')
const booking = require('../controller/booking.controller')

const bookingRouter = express.Router()

bookingRouter.route("/book").post(booking)
module.exports = bookingRouter