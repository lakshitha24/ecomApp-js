import { log } from "../../logs/logger";
import { Request, Response } from 'express';
import { updateProduct} from '../../services/product/product.update.service';

const updateProductController = async (req:Request,res:Response) => {
    try {
        const id = req.params.productId;
        const product = await updateProduct(req.body,id);
        res.status(200).json({product});
    } catch (error) {
        log.info(error);
    return res.json(400).json({ status: 'error',error: error });
    }
   }

export { updateProductController}