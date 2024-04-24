import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config()
const app = express();
app.use(cors())


mongoose.connect(process.env.MONGO_URI)
.then(()=>app.listen(process.env.PORT, () => {
    console.log(`connected to db & running on port ${process.env.PORT}`);
})).catch((error) => {
    console.error(error);
  });