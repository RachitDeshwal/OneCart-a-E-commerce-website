import User from "../model/userSchema.js"

export const getCurrentUser=async(req,res,next)=>{
    let id=req.userId;
    console.log(id)
    const result = await User.findById(id).select("-password")
    console.log(result)
    if(!result){
        return res.status(404).json({message:"user does not exist"})
    }
    return res.status(201).json(result)
}

export const getAdmin=async(req,res)=>{
    try{
    let email=req.adminEmail
    if(!email){
        return res.status(404).json({message:"user does not exist"})

    }
    return res.status(201).json({role:"Admin"})}
    catch(err){

    }

}