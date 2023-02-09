import { ProductModel } from "../../models/Product/product.model";
import { log } from "../../logs/logger";

const getProductById = async (id: string) => {
  try {
    const singleProduct = await ProductModel.findById(id).exec();
    if (!singleProduct) {
      throw Error;
    }
    const { _id, name, price, description, createdAt } = singleProduct;
    return {
      id: _id,
      name: name,
      price: price,
      description: description,
      createdAt: createdAt,
    };
  } catch (e) {
    log.info(e);
  }
};
export { getProductById };
