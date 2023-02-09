import express from "express";

const router = express.Router();
import { createSalesController} from '../controllers/sales/sales.create.controller';
import { deleteSalesController} from '../controllers/sales/sales.delete.controller';
import { getSalesController} from '../controllers/sales/sales.get.controller';

router.route('/').get(getSalesController).post(createSalesController);
router.route('/:salesId').delete(deleteSalesController);

export default router;