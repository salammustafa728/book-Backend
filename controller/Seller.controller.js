'use strict';

const { request } = require('express');
const {sellerModel} = require('../modal/MainSeller.modal');

const getSellers = (request , responce) => {
    sellerModel.find({ }, (error, seller) => {
        console.log(seller)
        if (error){
            responce.send(error)
        }
        else{
            console.log( request.query);
            responce.json(seller);   
        }
    });
   
}
const deleteSeller =(request , responce) => {
    const _id = request.params._id;
    console.log(_id);
    sellerModel.deleteOne({_id:_id}, (error, seller) => {
        if (error){
            responce.send(error)
        }
        else{ 
            responce.send(seller); 
             console.log( request.query); 
        }
    });
   
}


module.exports = { getSellers, deleteSeller };