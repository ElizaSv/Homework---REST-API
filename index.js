import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import myRoutes from './routes/myRoutes.js';

const app = express();
app.use(express.json());
const port = 4000;
dotenv.config(); 

mongoose.connect(process.env.MONGO_URL)
  .then(()=>console.log('connected'))
  .then(()=> app.listen(port, ()=>console.log(`You are listening to port ${port}!`)))
  .catch(err=>console.log(err));   

app.use('/', myRoutes)