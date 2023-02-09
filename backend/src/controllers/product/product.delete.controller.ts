import { log } from "../../logs/logger";
import { Request, Response } from "express";
import { deleteProduct } from "../../services/product/product.delete.service";

const deleteProductController = async (req: Request, res: Response) => {
  const id = req.params.productId;
  try {
    const product = await deleteProduct(id);
    res.status(200).json({ product });
  } catch (error) {
    log.info(error);
    return res.json(403).json({ status: "error", error: error });
  }
};

export { deleteProductController };
