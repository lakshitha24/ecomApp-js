import { ProductModel } from "../../models/Product/product.model";
import { Product } from "../../models/Product/product.interface";
import { log } from "../../logs/logger";

const createProduct = async (value: Product) => {
  const { name, price, description, createdAt } = value;

  try {
    const newProduct = new ProductModel({
      name: name,
      price: price,
      description: description,
      createdAt: createdAt,
    });
    return await newProduct.save();
  } catch (e) {
    log.info(e);
  }
};

export { createProduct };
