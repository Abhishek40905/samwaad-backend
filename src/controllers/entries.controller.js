import { asyncHandler } from "../utils/asynchandler.js"
import Entries from "../models/entries.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const submitentrydata = asyncHandler(async (req,res)=>{
    const {name,email,phone}= req.body;


    if(!name){
        throw new ApiError(500,"name should be present")
    }
    if (!email) {
        throw new ApiError(500,"email should be present")
    }
    if (!phone) {
        throw new ApiError(500,"phone number should be present")
    }


    let entry = await Entries.create({
        fullname:name,
        email:email,
        phone:phone
    })
    await entry.save()

    return res.status(200).json(new ApiResponse(200,{},"user entry done successfully "))
})


export {submitentrydata}