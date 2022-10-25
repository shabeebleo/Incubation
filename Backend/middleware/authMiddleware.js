const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req, res, next) => {
    console.log(req.headers,"headers",req.body,"body");
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //get token from header
            token = req.headers.authorization.split(' ')[1]
            //verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            //get user from token
            req.body.userId=decoded.id
            req.user = await User.findById(decoded.id).select('-password')
            next()
        } catch (error) {
            console.log(error, "kkkk");
            res.status(401)
            throw new Error('not Authorization')
        }
    }
    if (!token) {
        res.status(401)
        throw new Error('not Authorization,no token')
    }
})

module.exports = { protect }