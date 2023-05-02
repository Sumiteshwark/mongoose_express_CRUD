const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  user_id: {type: String, required: true, unique: true},
  user_name: {type: String, required: true},
  joining_date: {type: String, required: true},
  post: {type: String, required: true},
  address: String
});

exports.User = mongoose.model("User", userSchema);
