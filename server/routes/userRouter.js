const { Router } = require("express");
const { session } = require("passport");
const passport = require("passport");
const {
  getUsersController,
  registerController,
  loginController,
  RegisterGoogle,
  createUserController,
  deleteUserController,
} = require("../controllers/userController");
const {isUserAuthenticate} = require('./../middleware/auth');
const moment = require("moment");
const { User } = require("../models/User");

const userRouter = Router();

const successRedirectUrl = "http://localhost:3000/loginSuccess";
const failureRedirectUrl = "http://localhost:5000/users/google/error";
const failureRedirectVercel = "https://healthy-market-app-production.up.railway.app/users/google/error";

userRouter.get("/", getUsersController);
userRouter.post("/register", registerController);
userRouter.post("/createUser", createUserController);
userRouter.post("/loggin", loginController);
userRouter.get("/google", passport.authenticate("google"));
userRouter.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: failureRedirectVercel,
  }),
  RegisterGoogle
);




userRouter.get("/stats", async (req, res) => {
  const previusMonth = moment()
    .month(moment().month() - 1)
    .set("date", 1)
    .format("YYYY-MM-DD HH:mm:ss");

  try {
    const users = await User.aggregate([
      {
        $match: { createdAt: { $gte: new Date(previusMonth) } },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);

    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

userRouter.delete("/:userId", deleteUserController);

module.exports = userRouter;
