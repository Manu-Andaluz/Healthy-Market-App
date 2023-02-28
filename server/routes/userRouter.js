const { Router } = require("express");
const passport = require('passport');
const {
  getUsersController,
  registerController,
  loginController,
  loginGoogle
} = require("../controllers/userController");

const userRouter = Router();

userRouter.get("/", getUsersController);
userRouter.post("/register", registerController);
userRouter.post("/loggin", passport.authenticate('local', { session: false }), loginController);
userRouter.get('/google', passport.authenticate('google', { session: false , failureRedirect: '/loggin'}), loginGoogle);


module.exports = userRouter;
