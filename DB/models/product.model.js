import mongoose from "mongoose";

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:3,
        max:9
    },
    price:Number,
    description:String,
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"

    }
},{
    timestamps:true
})
const product =mongoose.model("product",productSchema)
export default product;