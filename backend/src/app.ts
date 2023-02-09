import express from 'express';
import cors from 'cors';
import { connectMongoDB } from "./config/connection";
import userRouter from '../src/routes/user.route';

const app = express()
connectMongoDB();

app.use(cors());
app.use(express.json());
app.use('/api/vi/user',userRouter);

export {app};
