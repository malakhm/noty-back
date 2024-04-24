import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import NotesRouter from './Routers/Notes.js';
dotenv.config()
const app = express();
app.use(express.json());
app.use(cors())
app.use('/api/note', NotesRouter);

mongoose.connect(process.env.MONGO_URI)
.then(()=>app.listen(process.env.PORT, () => {
    console.log(`connected to db & running on port ${process.env.PORT}`);
})).catch((error) => {
    console.error(error);
  });