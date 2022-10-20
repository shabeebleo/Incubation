//desc regisr nw user
//rout post /user
//access public
const registerUser = (req,res)=>{
    res.json({message:'Register User'})
}
//desc loin  user
//rout get /user
//access public
const loginUser = (req,res)=>{
    res.json({message:'login User'})
}
//desc user  data
//rout get /user/me
//access public
const getMe = (req,res)=>{
    res.json({message:' User data displayed'})
}
module.exports={
    registerUser,loginUser,getMe
}