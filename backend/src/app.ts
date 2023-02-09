import express from 'express';
import cors from 'cors';
import { connectMongoDB } from "./config/connection";
import userRouter from '../src/routes/user.route';
import productRouter from '../src/routes/product.route';
import salesRouter from '../src/routes/sales.route';

const app = express()
connectMongoDB();

app.use(cors());
app.use(express.json());
app.use('/api/vi/user',userRouter);
app.use('/api/vi/product',productRouter);
app.use('/api/vi/sale',salesRouter);

export {app};
