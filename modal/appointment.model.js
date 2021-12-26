'use strict';


const mongoose = require ('mongoose')

const appointmentDataSchema = new mongoose.Schema ({
    name:{type:String},
    description : {type:String},
    phone:{type:String}
})

module.exports= appointmentDataSchema;