const express = require('express')
const register = require('../controller/register.controller')


const registerRouter = express.Router()

registerRouter.route("/register").post(register)
module.exports = registerRouter