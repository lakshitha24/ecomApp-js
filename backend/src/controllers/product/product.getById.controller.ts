import { Request, Response } from "express";
import { getProductById } from "../../services/product/product.getById.service";
import { log } from "../../logs/logger";

const getProductController = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const product = await getProductById(id);
    res.status(200).json({ product });
  } catch (error) {
    log.info(error);
    return res.json(403).json({ status: "error", error: error });
  }
};

export { getProductController };
