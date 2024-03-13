import express, { urlencoded } from "express"
import cors from  "cors"
import cookieParser from "cookie-parser"


const app = express()

app.use(cors())

app.use(express.json({limit:"16kb"}))
// app.use(express.urlencoded({extended}))

app.use(express.static("public")) // 

app.use(cookieParser())



// routes imports

import  userRoutes from  './routes/user.routes.js'


// routes declaration 

app.use("/api/v1/users",userRoutes)
export {app}