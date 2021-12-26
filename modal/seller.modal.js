'use strict';

const mongoose = require ('mongoose')

const SellerDataSchema = new mongoose.Schema ({
    name:{type:String},
    description : {type:String},
})

module.exports= SellerDataSchema;