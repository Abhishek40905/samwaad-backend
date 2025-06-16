import express, { urlencoded } from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";
import dotenv from "dotenv";



dotenv.config({
    path:'./.env'
})
const app = express();
console.log(process.env.CORS_ORIGIN);

app.use(cors({
    origin:process.env.CORS_ORIGIN
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))

app.use(express.static('public'))

app.use(cookieParser())



import router from "./routes/entries.routes.js";


app.use('/api/entry',router)

export default app
