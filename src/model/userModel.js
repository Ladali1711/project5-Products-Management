const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //valid email
    },
    profileImage: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      // valid indian mobile number ko gegex me laga diya hu
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 15,
    },
    address: {
      shipping: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        pincode: { type: Number, required: true },
      },
      billing: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        pincode: { type: Number, required: true },
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
