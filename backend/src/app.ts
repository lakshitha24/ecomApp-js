import express from 'express';
import cors from 'cors';
import { connectMongoDB } from "./config/connection";
import userRouter from '../src/routes/user.route';
import productRouter from '../src/routes/product.route';

const app = express()
connectMongoDB();

app.use(cors());
app.use(express.json());
app.use('/api/vi/user',userRouter);
app.use('/api/vi/product',productRouter);

export {app};
