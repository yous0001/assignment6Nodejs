import express  from "express";
import userRouter from "./src/modules/user/user.routes.js";
import productRouter from "./src/modules/product/product.routes.js"
import db_connection from "./DB/connection.js";
//initiate express aplication

const app =express();
app.use(express.json())

app.use(userRouter)
app.use(productRouter)

db_connection();


app.listen(3000,()=>{
console.log("server is running at port 3000");
})