const mongoose = require('mongoose')

const Clients = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Clients",Clients)