import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import  dotenv from 'dotenv';
import router from './routes/userRoute.js';
import cors from 'cors'
const app= express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();
const PORT = process.env.PORT;
const MONGOURL=process.env.MONGOURL;
mongoose
.connect(MONGOURL)
.then(()=>{
  console.log("db connected");
  app.listen(PORT,()=>{
    console.log(`server is running in ${PORT}`)})});
app.use('/api/user',router);