import { Request, Response } from "express";
import { createSales } from "../../services/sales/sales.create.service";
import { log } from "../../logs/logger";

const createSalesController = async (req: Request, res: Response) => {
  try {
    const sale = await createSales(req.body);
    res.status(200).json(sale);
  } catch (error) {
    log.info(error);
    return res.json(403).json({ status: "error", error: error });
  }
};

export { createSalesController };
