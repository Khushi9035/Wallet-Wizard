const express=require('express');
const cors=require('cors');
const colors=require('colors');
const morgan=require('morgan');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const connectDb = require('./config/connectDb');

//config dot env
dotenv.config();

//database call
connectDb();

const app=express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//user routes
app.use('/api/v1/users',require('./routes/userRoute'))

//transection routes
app.use('/api/v1/transections',require('./routes/transectionRoute'))

const PORT=8080 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})