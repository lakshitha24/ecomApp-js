import { Sales } from "../../models/Sales/sales.interface";
import { log } from "../../logs/logger";
import { SalesModel } from "../../models/Sales/sales.model";

const createSales = async (value: Sales) => {
  const { items, subTotal } = value;
  try {
    const newSale = new SalesModel({
      items: items,
      subTotal: subTotal,
    });
    return await newSale.save();
  } catch (error) {
    log.info(error);
  }
};

export { createSales };
