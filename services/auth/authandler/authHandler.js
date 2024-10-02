const User = require("../../../pkg/user/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.createAccount = async (req, res) => {
  try {
    const newUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      birthday: req.body.borthday,
      role: req.body.role,
      profilepicture: req.body.profilepicture,
    });

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email, role: newUser.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    );

    res.cookie("jwt", token, {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
      ),
      secure: false,
      httpOnly: true,
    });

    res.status(201).json({
      status: "success",
      token,
    });
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Please enter email and password");
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .send("User with this email does not exist in the database");
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send("Invalid password!");
    }

    const token = jwt.sign(
      { id: user._id, name: user.name, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    );
    console.log("Generated Token:", token);

    res.cookie("jwt", token, {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
      ),
      secure: false,
      httpOnly: true,
    });

    res.status(201).json({
      status: "success",
      token,
      username: user.name,
      role: user.role,
    });
  } catch (err) {
    return res.status(500).send("Internal server error");
  }
};
