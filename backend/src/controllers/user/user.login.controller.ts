import { Request, Response } from "express";
import { loginUser } from "../../services/user/user.login.service";
import { log } from "../../logs/logger";

const loginUserController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await loginUser(email, password);
    res.status(201).json({ user });
  } catch (e) {
    log.info(e);
    return res.json(403).json({ status: "error", error: e });
  }
};

export { loginUserController };
