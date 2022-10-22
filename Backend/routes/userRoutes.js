const express =require('express')
const { isAsyncFunction } = require('util/types')
const router =express.Router()
const{registerUser,loginUser,getMe,home}=require('../controllers/UserController')
const {protect}=require('../middleware/authMiddleware')

router.post('/',registerUser)  
router.post('/login',loginUser)  
router.post('/me',protect,getMe) 
router.post('/get-user-info-by-id',protect,home) 

module.exports=router