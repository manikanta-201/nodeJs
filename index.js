
const mongoose = require("mongoose")
 mongoose.connect("mongodb://localhost:27017/")
 .then(()=>{
    console.log("connection establesh basbu")
 }).catch((err)=>{
    console.log(error)
 })