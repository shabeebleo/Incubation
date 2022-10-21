const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Admin = require('../models/adminModel')

const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    //check admin email
    const admin = await Admin.findOne({ email })
    if (admin && (await bcryptjs.compare(password, admin.password))) {
        res.json({
            _id: admin._id,
            name: admin.name,
            email: admin.email,
            token: generateToken(admin._id)
        })
    } else {
        res.status(400)
        throw new Error('invalid credentials')
    }
    // res.json({ message: 'login Admin' })
})


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' })
}


module.exports = {
    loginAdmin
}