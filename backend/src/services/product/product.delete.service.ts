import { ProductModel } from "../../models/Product/product.model";
import { log } from "../../logs/logger";

const deleteProduct = async (id: string) => {
  try {
    const deleteProduct = await ProductModel.deleteOne({ _id: id });
    if (deleteProduct.deletedCount == 0) {
      throw new Error("cound not found");
    }
    return deleteProduct;
  } catch (e) {
    log.info(e);
  }
};

export { deleteProduct };
