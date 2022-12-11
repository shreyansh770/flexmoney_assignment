const express  = require('express');
const bookingRouter = require('./router/booking');
const paymentRouter = require('./router/payment');
const registerRouter = require('./router/register');
require('dotenv/config');
require('./model/database')
let PORT = process.env.PORT


// register -> payment -> booking

const app = express()

app.use("/user",registerRouter)
app.use("/payment",paymentRouter)
app.use("/booking",bookingRouter)




app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
})