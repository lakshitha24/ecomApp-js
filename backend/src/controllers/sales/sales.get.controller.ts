import { Request, Response } from "express";
import { getSales } from "../../services/sales/sales.get.service";
import { log } from "../../logs/logger";

const getSalesController = async (req: Request, res: Response) => {
  try {
    const sales = await getSales();
    res.status(200).json({ sales });
  } catch (error) {
    log.info(error);
    return res.json(403).json({ status: "error", error: error });
  }
};

export { getSalesController };
