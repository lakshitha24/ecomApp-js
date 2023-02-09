import { Schema, model } from "mongoose";
import { User } from "./user.interface";
import { bcrypt } from "bcryptjs";

const UserSchema = new Schema<User>({
  first_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
const UserModel = model<User>("User", UserSchema);

export { UserModel };
