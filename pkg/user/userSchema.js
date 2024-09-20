const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "You must enter a name"],
  },

  lastName: {
    type: String,
    required: [true, "You must enter a last name"],
  },

  email: {
    type: String,
    required: [true, "You must enter an email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },

  password: {
    type: String,
    required: [true, "You must enter a password"],
  },

  birthday: {
    type: Date,
    required: [true, "You must enter a birthday"],
  },

  role: {
    type: String,
    default: "user",
  },

  profilepicture: {
    type: String,
    default: "defaultpp.png",
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 8);
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
