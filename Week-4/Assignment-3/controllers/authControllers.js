const db = require("./../db");

exports.signUp = async (req, res) => {
  const { email, password } = req.body;

  // 1.) Check if the email already exists
  const user = await db.getUserByEmail(email);

  if (user) {
    return res.status(400).json({
      status: "fail",
      message: "User already exists! Please use other email to sign up!",
    });
  }

  // 2.) Add user to the user table
  const newUser = await db.createUser(email, password);

  // 3.) Send some response
  res.status(200).json({
    newUser: newUser,
    message: "Sign up successfully! Press Yes to redirect!",
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  // 1.) Get user by the email and password provided by the user and check if the pair exists
  const user = await db.getUserByEmailandPassword(email, password);
  if (!user) {
    return res.status(400).json({
      status: "fail",
      message: "Wrong email or password! Please try again",
    });
  }

  // 2.) Send response
  res
    .status(200)
    .json({ message: "Log in successfully! Press Yes to redirect!" });
};
