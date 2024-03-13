// require('dotenv').config({path:'./.env'})
import dotenv from "dotenv";
// import mongoose  from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";
import {app} from './app.js'


// this si 2nd approach


dotenv.config({path:"./env"})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
      console.log(`Server is running  port : ${process.env.PORT}`)  
    })
})
.catch((err)=>{
    console.log("Mongo db connection failed ",err);
})


// this is one approach where we take down in all one file 
/*
import  express from 'express'


const app = express()
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The name IIFE is promoted by Ben Alman in his blog.
(async()=>{
    try {
     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
     app.on("error ",(error)=>{
        console.log("Error",error);
        throw error
     })
     app.listen(process.env.PORT,()=>{
        console.log("app is listening on port ",process.env.PORT);
     })
    }
    catch(error){
        console.error("Error ",error);
        throw err
    }
})()  // this is IIFE  -->IIFE


*/