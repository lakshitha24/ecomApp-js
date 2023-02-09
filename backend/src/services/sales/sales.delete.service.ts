import { log } from "../../logs/logger";
import { SalesModel } from "../../models/Sales/sales.model";
const deleteSales = async (id: string) => {
  try {
    const deleteSales = await SalesModel.deleteOne({ _id: id });
    if (deleteSales.deletedCount == 0) {
      throw new Error("cound not found");
    }
    return deleteSales;
  } catch (error) {
    log.info(error);
  }
};
export { deleteSales };
