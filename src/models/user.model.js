import { Schema, model } from "mongoose";
const mongoose = require("mongoose");

const userCollection = "users";

const usersSchema = new Schema({
  first_name: String,
  last_name: String,
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const userModel = mongoose.model(userCollection, usersSchema);

module.exports = {
  userModel,
};
