import { log } from "../../logs/logger";
import { User } from "../../models/user/user.interface";
import { UserModel } from "../../models/user/user.model";

const createUser = async (value: User) => {
  const { first_name, email, password } = value;
  try {
    const userExists = await UserModel.findOne({ email });
    if (userExists) {
      throw new Error("User already exists");
    }
    const newUser = new UserModel({
      first_name: first_name,
      email: email,
      password: password,
    });
    return await newUser.save();
  } catch (e) {
    log.info(e);
  }
};

export { createUser };
