import mongoose, { Schema } from "mongoose";

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
const user = mongoose.model("user", UserSchema);
