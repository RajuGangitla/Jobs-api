const mongoose = require("mongoose")

const JobSchema = new mongoose.Schema ({
    company:{
        type:String,
        required: [true, 'Please provide a name'],
        maxlength:50
    },
    position:{
        type:String,
        required: [true, 'Please provide a position'],
        maxlength:50
    },
    status:{
        type:String,
        enum:['interview' , 'declined' , 'pending'],
        default:'pending',
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true, 'Please Provide user']
    }
},{timestamps:true})


module.exports = mongoose.model('Job',JobSchema)