import { log } from "../../logs/logger";
import { UserModel } from "../../models/user/user.model";

const getUser = async (id: string) => {
  try {
    const user = await UserModel.findById(id).exec();
    if (!user) {
      throw Error;
    }
    const { _id, first_name, email } = user;
    return {
      id: _id,
      first_name: first_name,
      email: email,
    };
  } catch (error) {
    log.info(error);
  }
};

export { getUser };
