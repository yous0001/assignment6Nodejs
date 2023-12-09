import mongoose from "mongoose";

const db_connection= async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/assignment')
    .then((res)=>console.log("db connnected successfully"))
    .catch((err)=>console.log("db connnected failed",err))
    

}
export default db_connection;