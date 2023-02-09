import { ProductModel } from "../../models/Product/product.model";
import { log } from "../../logs/logger";

const getAllProduct = async () => {
  try {
    return await ProductModel.find();
  } catch (e) {
    log.info(e);
  }
};

export { getAllProduct };
