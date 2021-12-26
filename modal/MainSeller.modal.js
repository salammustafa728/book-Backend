'use strict';

const mongoose = require('mongoose');
const SellerDataSchema = require("../modal/seller.modal");

const SellerSchema = new mongoose.Schema({
    sellers: [SellerDataSchema]
});

const sellerModel = mongoose.model('seller',SellerSchema);

const seedSeller = ()=>{

    const seller =new sellerModel({
        sellers: [{
            name:"Dr. Mohamed Amjad",
            description:"bones"
        },{
            name:"Dr. Maged Mohamed",
            description:"nerves"
        },{
            name:"Dr. Ahmed Qassem",
            description:"bones"
        },{
            name:"Dr. Fathi Ahmed",
            description:"nerves and brain"
        },{
            name:"Dr. Ramzy Fouad",
            description:"Bones and joints "
        }]
    })
    // console.log("seller"+ seller);
    seller.save();
}

module.exports={sellerModel,seedSeller};