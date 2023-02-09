import { Request, Response } from "express";
import { createProduct } from "../../services/product/product.create.service";
import { log } from "../../logs/logger";

const createProductController = async (req: Request, res: Response) => {
  try {
    const product = await createProduct(req.body);
    res.status(201).json({ product });
  } catch (e) {
    log.info(e);
    return res.json(403).json({ status: "error", error: e });
  }
};

export { createProductController };
