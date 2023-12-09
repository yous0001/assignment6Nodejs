import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:3,
        max:9
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    gender:{
        type:String,
        default:"male",
        enum:["male","female"]
    },
    password:{
        type:String,
        required:true
    },
    age:Number,
    phone:{
        type:String,
        required:true
    }
},{
    timeseries:true
})

const User=mongoose.model('User',userschema)

export default User;