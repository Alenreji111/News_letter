const express = require('express')
const bodyparser = require('body-parser')
const request = require('request')
const path = require('path')
const { MailChimp } = require('./MailChimp')
const mailChimpClient= new MailChimp()
// import axios from 'axios'

const app = express()
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get("/",getSignUp)

function getSignUp(req,res){
    // console.log("Signup")
    res.sendFile(path.join(__dirname,"..","view","signup","signup.html"))
   
}

app.post("/",signUpPage)

async function signUpPage(req,res){
    
   const {fname,sname,emailid} = req.body
   
   const data = [
        {

            email_address: emailid,
        
            status:"subscribed",
        
            merge_feild: {
                FNAME:fname,
        
                LNAME:sname,
                }
           }
    ]
   
   const mailChimp =await mailChimpClient.createBatchListMembet(data,"6e8a48ce1d")

   if(!mailChimp){
    return res.status(400).sendFile(path.join(__dirname,"..","view","failure","failure.html"))
   }

   return res.status(201).sendFile(path.join(__dirname,"..","view","success","success.html"))


}

app.post("/failure.html",function(req,res){
    res.redirect("/")
})

app.listen(3000,function(){

    console.log("server running on local host 3000")

})





// apikey of mailchimp
// 9a75ccd2bdad7ff887f9d2d19c6cad17-us21

// list id 
// 6e8a48ce1d