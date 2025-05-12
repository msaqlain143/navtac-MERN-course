import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new Schema(
  {
    fname: {
      type: "String",
      required: true,
    },
    email: {
      type: "String",
      required: true,
    },
    password: {
      type: "String",
      required: true,
    },
  },
  { timestamps: true }
);

//model

//bcrypt a password

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    throw Error("Password Encrypt Failed ! ");
  }
});

//cpmpared hash and password
UserSchema.methods.comparedPassword = async function (enterPassword) {
  try {
    return await bcrypt.compare(enterPassword, this.password);
  } catch (error) {
    throw new Error("Password Compared Failed");
  }
};

UserSchema.methods.genrateToken = function () {};
const User = mongoose.model("user", UserSchema);
export default User;
