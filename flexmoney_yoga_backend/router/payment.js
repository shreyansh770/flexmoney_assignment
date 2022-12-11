const express = require('express')
const payment = require('../controller/payment.controller')

const paymentRouter = express.Router()

paymentRouter.route("/pay").post(payment)

module.exports = paymentRouter