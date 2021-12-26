'use strict';
const {buyerModel} = require('../modal/userAppointment.madel');
const { request } = require('express');

const getBuyers = (request , responce) => {
    buyerModel.find({}, (error, buyer) => {
        console.log(buyer)
        if (error){
            responce.send(error)
        }
        else{
            console.log( request.query);
            responce.json(buyer);   
        }
    });
}
const createAppointment = (request, responce) => {
    const {  name, description, phone } = request.body;
    console.log(request.body);
    // responce.send('working correctly');
    buyerModel.findOne({}, (error, buyer) => {
        if (error) {
            responce.status(400).send(error);        }
        else {
            console.log(buyer);
            buyer.buyers.push({ name: name, description: description, phone: phone });
            buyer.save();
            responce.json(buyer);
        }
    })
}
const deleteBuyer = (request,responce)=>{
    const _id = request.params._id;
    console.log(_id);
    buyerModel.deleteOne({_id:_id},(error,buyerr)=>{
        if(error){
            responce.send(error)
        }else{
            responce.send(buyerr);
            console.log( request.query);
        }
    })
}


module.exports = { getBuyers , deleteBuyer, createAppointment };