import { Request, Response } from "express";
import { createUser } from "../../services/user/user.create.service";
import { log } from "../../logs/logger";

const UserCreateController = async (req: Request, res: Response) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json({ user });
  } catch (e) {
    log.info(e);
    return res.json(403).json({ status: 'error', error: e });
  }
};

export { UserCreateController };
