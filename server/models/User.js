const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 3, maxlength: 30 },
    surname: { type: String, required: true, minlength: 3, maxlength: 30 },
    birthday: {
      type: String,
      required: true,
      get: (dateString) => new Date(dateString),
    },
    age: { type: Number, required: true },
    nationality: { type: String, required: true },
    adress: { type: String, required: true },
    email: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 50,
      unique: true,
    },
    password: { type: String, required: true, minlength: 3, maxlength: 1024 },
    admin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
