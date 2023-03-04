const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 3, maxlength: 30 },
    surname: { type: String, required: true, minlength: 3, maxlength: 30 },
    birthday: {
      type: String,
    },
    nationality: { type: String },
    adress: { type: Object },
    email: {
      type: String,
      minlength: 10,
      maxlength: 50,
      unique: true,
    },
    password: { type: String, minlength: 3, maxlength: 1024 },
    isAdmin: { type: Boolean, default: false },
    id_google: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
