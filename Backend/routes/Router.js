const express = require('express');
const routes = express.Router();
const Clients = require('../model/Client');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//  @post route for register user

routes.route('/register').post(
    async (req,res)=>{
       try {
        const {username,email,pass} = req.body
        if(!username || !email || !pass){
            res.send("Missing Data in fields...")
        }else{
            const Exists = await Clients.findOne({email})
            if(Exists){
                res.send("Email in use")
            }
            else{
                const saltRounds = 10;
                const hashed = await bcrypt.hash(pass,saltRounds)
                const newUser = Clients.insertMany({
                    username:username,
                    email:email,
                    pass:hashed,
                })
                if (newUser)
                    res.status(200).send("User created")
                else
                    res.send("error in creating new user")
            }
        }
        
       } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error...")
        
       }
    }
)

// @ post route for loging user to account

routes.route("/login").post(
    async(req,res)=>{
        try {
            const {email,pass} = req.body;
            if(!email || !pass){
                res.send("Some field are missing")
            }
            else{
                const Check = await Clients.findOne({email})
                if (!Check){
                   res.send("Invalid email")
                }else{
                    if(await bcrypt.compare(pass,Check.pass)){
                        const key = "@#$%^&*()_+"
                        const Token  = jwt.sign({
                            user:{
                                id:Check._id,
                                email:Check.email,
                                username:Check.username,
                                status:1
                            }},key,{expiresIn:'1d'})
                            res.status(200).send(Token)
                    }
                    else{
                        res.send("Wrong password")
                    }
                }
            }

            
        } catch (error) {
            res.status(500).send("Internal server error...")
            
        }

    }
)

module.exports = routes