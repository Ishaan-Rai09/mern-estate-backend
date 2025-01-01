import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
dotenv.config();

const uri = process.env.MONGO;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));
const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000 http://localhost:3000');
});

app.use('/api/user',userRouter)