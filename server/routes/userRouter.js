const { Router } = require("express");
const { session } = require("passport");
const passport = require("passport");
const {
  getUsersController,
  registerController,
  loginController,
  RegisterGoogle,
} = require("../controllers/userController");

const userRouter = Router();

const successRedirectUrl = "http://localhost:5000/users/google/success";
const failureRedirectUrl = "http://localhost:5000/users/google/error"

userRouter.get("/", getUsersController);
userRouter.post("/register", registerController);
userRouter.post("/loggin", loginController);
userRouter.get(
  "/google",
  passport.authenticate("google"),
);
userRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: failureRedirectUrl,
  }),
  RegisterGoogle
);

userRouter.get(
  "/succes",
  (req, res) => {
    res.send(req.user);
}
);




module.exports = userRouter;
