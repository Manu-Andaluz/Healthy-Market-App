const { Router } = require("express");
const passport = require("passport");
const {
  getUsersController,
  registerController,
  loginController,
  RegisterGoogle,
  loginGoogle
} = require("../controllers/userController");

const userRouter = Router();

userRouter.get("/", getUsersController);
userRouter.post("/register", registerController);
userRouter.post("/loggin", loginController);
userRouter.get(
  "/google",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/loggin",
  }),
  RegisterGoogle
);


module.exports = userRouter;
