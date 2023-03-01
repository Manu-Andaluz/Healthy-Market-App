const adminRouter = require("express").Router();

// GET ALL COMPANIES

adminRouter.get("/", (req, res) => {
  res.send("hola");
});

module.exports = adminRouter;
