import dotenv from "dotenv";
import {ConnectDB} from './db/index.js'
import app from "./app.js"
dotenv.config({
    path:"./.env"
})

ConnectDB().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Your application is running on port ${process.env.PORT}`);
    })
}).catch((error)=>{
    console.log(error);
    
})
