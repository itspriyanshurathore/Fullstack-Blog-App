import passport from "passport";
import bcrypt from "bcrypt";
import User from "../models/User.js";

// login page
export const getLogin = (req, res) => {
  res.render("login", {
    title: "Login",
    user: req.user || null,
    error: "",
  });
};

// login logic
export const login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);

    if (!user) {
      return res.send("Invalid email or password");
    }

    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.redirect("/");
    });
  })(req, res, next);
};

// register page
export const getRegister = (req, res) => {
  res.render("register", {
    title: "Register",
    user: req.user || null,
    error: "",
  });
};

// register logic
export const register = async (req, res) => {
  const { username, firstName, lastName, email, tel, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.send("User already exists");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      firstName,
      lastName,
      email,
      tel,
      password: hashPassword,
    });

    await newUser.save();
    return res.redirect("/login");
  } catch (error) {
    return res.render("register", {
      title: "Register",
      error: error.message,
      user: null,
    });
  }
};

// logout logic
export const logout = (req, res) => {
  req.logout(() => {
    res.render("logout", {
      title: "Logged Out",
      user: null,
    });
  });
};
