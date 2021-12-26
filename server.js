'use strict';
const express = require('express') 
const app = express() 

const mongoose = require('mongoose');
const cors = require('cors'); 
app.use(cors())
app.use(express.json());
require('dotenv').config();
const PORT = process.env.PORT;
const {seedSeller} = require("./modal/MainSeller.modal");
const {getSellers,deleteSeller} = require('./controller/Seller.controller');
const {seedBuyer} = require('./modal/userAppointment.madel')
const {getBuyers,deleteBuyer,createAppointment}=require('./controller/Buyer.controller');

mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// seedBuyer();
// seedSeller();

//get seller data
app.get("/seller",getSellers);
app.delete("/seller/:_id",deleteSeller);

// get buyer data 
app.get("/buyer",getBuyers);
app.delete("/buyer/:_id",deleteBuyer);
app.post("/buyer",createAppointment);

app.get('/',(x,y)=>{
    y.send('workkkkkkkkkkkkkkkkking');
});

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});