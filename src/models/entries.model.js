import mongoose from "mongoose";

const entriesSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        lowercase:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    phone:{
        type:String,
        required:true,
        trim:true
    }

},{timestamps:true})

 const Entries = mongoose.model('Entries',entriesSchema)
 export default Entries