import mongoose from "mongoose";
import { config } from "./config";
import { log } from '../logs/logger';

const connectMongoDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(`${config.mongoDB.URL}`, {
      retryWrites: true,
    });
    log.info("DB connected");
  } catch (error) {
    log.info(error);
  }
};

export { connectMongoDB };
