import express from 'express';
import cors from 'cors';
import { connectMongoDB } from "./config/connection";

const app = express()
connectMongoDB();

app.use(cors());
app.use(express.json());

export {app};
