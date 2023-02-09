import { log } from "../../logs/logger";
import { SalesModel } from "../../models/Sales/sales.model";

const getSales = async () => {
  try {
    return await SalesModel.find();
  } catch (error) {
    log.info(error);
  }
};

export { getSales };
