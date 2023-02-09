import { log } from "../../logs/logger";
import { getAllProduct } from "../../services/product/product.get.service";
import { Request, Response } from "express";

const getAllProductController = async (req: Request, res: Response) => {
  try {
    const product = await getAllProduct();
    res.status(200).json({ product });
  } catch (error) {
    log.info(error);
    return res.json(403).json({ status: "error", error: error });
  }
};

export { getAllProductController };
