import { log } from "../../logs/logger";
import { getUser } from "../../services/user/user.get.service";
import { Request,Response } from "express";

const getUserController =async (req: Request, res: Response) => {
    try {
        const user = await getUser(req.params.userId)
        res.status(200).json({user})
    } catch (error) {
        log.info(error);
    return res.json(403).json({ status: 'error', error: error });
    }
}

export {getUserController}