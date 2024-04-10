import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 4,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    default: 0,
  },
});
const UserModel = mongoose.model("User", userSchema);

export default UserModel;
