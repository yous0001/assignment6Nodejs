import product from "../../../DB/models/product.model.js";
import User from "../../../DB/models/user.model.js";
//1st requirement
export const addproduct=async(req,res,next)=>{
    const {name,price,description,userID} = req.body;
    const user=await User.findById(userID)
    if(!user){
        return res.json({
            message:"this userID isn't exists",
            status:409
        })
    }
    const newproduct=await product.create({name,price,description,userID})
    res.json({
        message:"added successfully",
        status:200
    })
}



//2st requirement
export const deleteproduct=async(req,res,next)=>{
    const{_id,loggedInUserID}=req.query
    const updatedproduct = await product.findOneAndDelete({_id,userID:loggedInUserID})
    if(!updatedproduct){
        return res.json({
            message:"delete falid"
            ,status:409
        })
    }
    res.json({
        message:"delete done"
        ,status:200})

}

//3st requirement
export const updateproduct=async(req,res,next)=>{
    const{_id,loggedInUserID}=req.query
    const{name,description}=req.body

    const updatedproduct = await product.findOneAndUpdate({_id,userID:loggedInUserID},{name,description},{new:true})
    if(!updatedproduct){
        return res.json({
            message:"update falid"
            ,status:409
        })
    }
    res.json({
        message:"update done"
        ,status:200})

}

//4st requirement
export const getallproducts=async(req,res,next)=>{
    const products=await product.find();
    res.json({
        message:"done",
        status:200,
        products
    })

}

//5st reqirement
export const getallproducts_owners=async(req,res,next)=>{
    const products=await product.find().populate([{path:"userID"}])
    res.json({
        message:"done",
        status:200,
        products
    })
}