import { Schema, model } from "mongoose";
const mongoose = require("mongoose");

const userCollection = "users";

const usersSchema = new mongoose.Schema({
  first_name: {
    type: String,
    index: true,
  },

  last_name: {
    type: String,
    required: true,
    unique: true,
  },

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
