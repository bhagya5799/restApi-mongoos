const mongoose = require('mongoose')

const BrandName = mongoose.Schema({
    brandName:{
        type: String,
        required:true,
    },
    data:{
        type: Date,
        default: Date.now,
    },
    place:{
        type: String,

    },
    details: {
        type: Number
    }

})
module.exports=mongoose.model('brandName',BrandName)