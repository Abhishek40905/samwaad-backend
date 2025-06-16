import mongoose from "mongoose";
import { ApiError } from "../utils/ApiError.js";

const ConnectDB = async ()=>{
    try {

        const ConnectionInstance = await mongoose.connect(`${process.env.CONNECTION_STRING}/${process.env.DB_NAME}`)
        console.log(`Mongo db connected with connection instance ${ConnectionInstance.connection.host}`);
        
    } catch (error) {
        throw new ApiError(400,"Database connection failed")
    }
}

export {ConnectDB}