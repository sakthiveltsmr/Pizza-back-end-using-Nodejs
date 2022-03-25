const express = require("express");
const { regValidation } = require("../middleware/registervalidation");
const router = express.Router();
const User = require("../model/userModel");

router.post("/register", regValidation, async (req, res) => {
  // var error = await User.validate(req.body);
  // if (error) {
  //   console.log(error);
  //   return res.status(404).send({ msg: error.details[0].message });
  // }
  const { name, email, password } = req.body;

  const newUser = new User({ name, email, password });

  try {
    newUser.save();

    console.log("user register successfully");
    return res.status(200).send("User Registered successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.find({ email, password });

    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
      };
      res.send(currentUser);
    } else {
      return res.status(400).json({ message: "User Login Failed" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Something went weong" });
  }
});

router.get("/getallusers", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

router.post("/deleteuser", async (req, res) => {
  const userid = req.body.userid;

  try {
    await User.findOneAndDelete({ _id: userid });
    res.send("User Deleted Successfully");
  } catch (error) {
    return res.status(400).json({ message: error });
  }
});

module.exports = router;
