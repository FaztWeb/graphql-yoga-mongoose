import { Schema, model } from "mongoose";

const userSchema = new Schema({
  nickname: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true
  },
  phone: String,
  city: String
});

export default model("User", userSchema);
