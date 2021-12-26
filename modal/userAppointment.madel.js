'use strict';
const req = require('express/lib/request');
const mongoose = require('mongoose');
const BuyerDataSchema = require('../modal/appointment.model');

const BuyerSchema = new mongoose.Schema({
    buyers: [BuyerDataSchema]
});

const buyerModel = mongoose.model("buyer",BuyerSchema);

const seedBuyer = () => {
    const buyer = new buyerModel({
        buyers:[{
            name:"salam",
            description:'hhhhhhhhhhhhh',
            phone:"0789562365"
        },{
            name:"salma",
            description:'hhhhhhhhhhhhh',
            phone:"0789562365"
        }]
    }) 
    console.log("buyer"+buyer);
    buyer.save();
}

module.exports = { buyerModel, seedBuyer};