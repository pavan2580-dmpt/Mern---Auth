const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodypaser = require('body-parser')
const cors = require('cors')
const rateLimiter = require('express-rate-limit')
require('dotenv').config();

const appRatelimiter = rateLimiter({
    windowMs: 1 * 60 * 1000,
    max: 10,
})

app.use("/",appRatelimiter)
app.use(bodypaser.json())
app.use(express.json())
app.use(cors("*"))


const DB_Conn = async()=>{
    await mongoose.connect(process.env.MONGO_URI).then(
        ()=>{
            console.log("Connected to Database...")
        }
    ).catch(
        (err)=>{
            console.log("An error occured...")
        }
    )
}

DB_Conn(); 

app.get('/',(req,res)=>{
    res.send("Hello from server...")
})

app.use('/',require('./routes/Router'))

app.listen(4000,()=>console.log("Server is running on port 4000"))