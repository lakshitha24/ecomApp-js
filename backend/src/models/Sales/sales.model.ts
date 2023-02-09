import { Schema, model } from "mongoose";
import { Sales, item } from "./sales.interface";

const itemSchema = new Schema<item>({
  productId: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  total: { type: Number, required: true },
});

const salesSchema = new Schema<Sales>({
  items: { type: [itemSchema] },
  subTotal: { type: Number, required: false },
  createdAt: { type: Date, default: Date.now() },
});

const SalesModel = model<Sales>("sales", salesSchema);

export { SalesModel };
