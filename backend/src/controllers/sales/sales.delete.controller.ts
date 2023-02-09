import { log } from "../../logs/logger";
import { Request, Response } from "express";
import { deleteSales } from "../../services/sales/sales.delete.service";

const deleteSalesController = async (req: Request, res: Response) => {
  try {
    const sale = await deleteSales(req.params.salesId);
    res.status(200).json({ sale });
  } catch (error) {
    log.info(error);
    return res.json(403).json({ status: "error", error: error });
  }
};

export { deleteSalesController };
