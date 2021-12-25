const express = require('express') 
const app = express() 

const mongoose = require('mongoose');
const cors = require('cors'); 
app.use(cors())
app.use(express.json());
require('dotenv').config();
const PORT = process.env.PORT;


mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
);


app.get('/',(x,y)=>{
    y.send('workkkkkkkkkkkkkkkkking');
});


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});