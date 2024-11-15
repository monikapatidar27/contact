const UserModel = require("../models/userModel");
const {isValidMobileNumber, isValidEmail} = require("../helper/utils/vaild");

const user = {};

user.contact = async (req, res) => {
  try {
    const { name, email, contact } = req.body;
    if (!isValidEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email" });
    }
    if (!isValidMobileNumber(contact)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid mobile number" });
    }

    const existingUserEmail = await UserModel.findOne({ email });
    if (existingUserEmail) {
      return res
        .status(400)
        .json({ success: false, message: "Email is already registered" });
    }

    const existingUserMobile = await UserModel.findOne({ contact });
    if (existingUserMobile) {
      return res
        .status(400)
        .json({ success: false, message: "Mobile number is already taken" });
    }

    const newUser = new UserModel({ name, email, contact });
    const savedUser = await newUser.save();

    return res.status(201).json({ success: true, user: savedUser });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = user;
