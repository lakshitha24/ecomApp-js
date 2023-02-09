import { UserModel } from "../../models/user/user.model";
import { log } from "../../logs/logger";

const loginUser = async (email: string, password: string) => {
  try {
    const user = await UserModel.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      return {
        id: user._id,
        first_name: user.first_name,
        email: user.email,
        userToken: user._id,
      };
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (e) {
    log.info(e);
  }
};
export { loginUser };
