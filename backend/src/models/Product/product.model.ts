import { Schema, model } from "mongoose";
import { Product } from "./product.interface";

const productSchema = new Schema<Product>({
  name: { type: String, required: [true, "product name must be provided"] },
  price: { type: Number, required: [true, "product price must be provided"] },
  description: { type: String, required: false },
  createdAt: { type: Date, default: Date.now() },
});

const ProductModel = model<Product>("product", productSchema);

export { ProductModel };
