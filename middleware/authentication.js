const User = require('../models/User')
const jwt = require('jsonwebtoken')
const {UnauthenticatedError} =require('../errors')

const auth = async (req,res,next)=>{
    const authHeader = await req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer " )){
        throw new UnauthenticatedError('Authentication invalid')
    }

    const token = await authHeader.split(' ')[1]

    try {
        const payload = jwt.verify(token , process.env.JWT_SECRET)
        //attach the user to the job routes

        // const user = User.findById(payload.id).select('-password')
        // req.user = user

        req.user={userId:payload.userId, name:payload.name}
        next()
    } catch (error) {
        throw new UnauthenticatedError('Authentication invalid')
    }
}


module.exports = auth