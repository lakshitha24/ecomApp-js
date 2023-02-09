import { log } from "../logs/logger";
import { Request, Response } from "express";

const asyncWrapper = (fn) => {
  return async (req:Request, res:Response,next) => {
    try {
      await fn(req, res);
    } catch (error) {
        next(error)
        log.info(error);
    }
  };
};

export { asyncWrapper };
