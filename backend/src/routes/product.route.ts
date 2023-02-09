import express from "express";

const router = express.Router();
import { createProductController } from "../controllers/product/product.create.controller";
import { deleteProductController } from "../controllers/product/product.delete.controller";
import { getAllProductController } from "../controllers/product/product.get.controller";
import { getProductController } from "../controllers/product/product.getById.controller";
import { updateProductController } from "../controllers/product/product.update.controller";

router.route('/').get(getAllProductController).post(createProductController);
router.route('/:productId').get(getProductController).put(updateProductController).delete(deleteProductController);

export default router;
