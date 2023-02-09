import { ProductModel } from "../../models/Product/product.model";
import { Product } from "../../models/Product/product.interface";
import { log } from "../../logs/logger";

const updateProduct = async (value: Product, id: string) => {
  const { name, price, description } = value;
  try {
    const updateProductData = await ProductModel.findById(id).exec();
    if (!updateProductData) {
      throw Error;
    }
    if (name) {
      updateProductData.name = name;
    }
    if (price) {
      updateProductData.price = price;
    }
    if (description) {
      updateProductData.description = description;
    }
    updateProductData.save();
    return updateProductData;
  } catch (e) {
    log.info(e);
  }
};

export { updateProduct };
