const express= require('express');
const router = require("./src/routes/api");
const app    = new express();

//Security Middleware Import
const rateLimit    =     require('express-rate-limit')
const helmet       =     require('helmet')
const hpp          =     require('hpp')
const cors         =     require('cors')
const xss          =     require('xss-clean')
const mongoSanitize=     require('express-mongo-sanitize')


//Security Middleware Implement
app.use(hpp())
app.use(xss())
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())

//Request rate Limit
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
})
app.use(limiter)







app.use("/api/v1",router)




//Undefined Route
app.use('*',(req,res)=>{
    res.status(404).json({status:"failed",data:"Not Found"})
})
module.exports=app;