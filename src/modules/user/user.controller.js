import User from "../../../DB/models/user.model.js";


//1st require
export const signup =async(req,res,next)=>{
    const {username,email,password,gender,age,phone}=req.body
    const isemailexists=await User.findOne({email})
    if(isemailexists){
        return res.json({
            message:"email is already exists",
            status:409
        })
    }
    const createuser =await User.create({username,email,password,gender,age,phone})
    res.json({
        message:"user created succcessfully",
        status:200,
        createuser
    })
}

//3st reqirement
export const updateuser = async (req,res,next)=>{
    const {username}=req.body
    const {email}=req.params
    const user = await User.findOneAndUpdate({email}, {username},{new:true})

    if (!user) {
        return res.json({
            message: 'User Updated Failed',
            status:409,
            user
        })
    }

    res.json({
        message: 'User Update Successfully',
        status:200,
        user
    })

}


//4st reqirement
export const deleteuser=async(req,res,next)=>{
    const {email}=req.params
    const user = await User.deleteOne({email})
    if(!user.deletedCount) {
        return res.json({
            message: 'User deleted Failed',
            status:409
        })
    }

    res.json({
        message: 'User deleted Successfully',
        status:200
    })


}

//7st require
export const getallusers= async(req,res,next)=>{
    const users=await User.find();
    res.json({
        message:"done",
        status:200,
        users
    })
}




