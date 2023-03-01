const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const mainRouter = require("./routes/index");
const morgan = require("morgan");
const passport = require("passport");
const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const AdminJSMongoose = require("@adminjs/mongoose");
const { Product } = require("./models/Product");
const { User } = require("./models/User");
const bcrypt = require("bcrypt");

const app = express();

const session = require("cookie-session");

AdminJS.registerAdapter(AdminJSMongoose);
// Very basic configuration of AdminJS.
const adminJs = new AdminJS({
  resources: [{ resource: Product }, { resource: User }],
  rootPath: "/admin", // Path to the AdminJS dashboard.
});
// Build and use a router to handle AdminJS routes.
const router = AdminJSExpress.buildAuthenticatedRouter(
  adminJs,
  {
    cookieName: "adminjs",
    cookiePassword: "complicatedsecurepassword",
    authenticate: async (email, password) => {
      const user = await User.findOne({ email });
      if (user) {
        const matched = await bcrypt.compare(password, user.password);
        if (matched) {
          const isAdmin = user.isAdmin;
          if (isAdmin) {
            return user;
          }
        }
      }
      return false;
    },
  },
  null,
  // Add configuration required by the express-session plugin.
  {
    resave: false,
    saveUninitialized: true,
  }
);

app.use(adminJs.options.rootPath, router);

app.use(
  session({
    secret: "mysecret", // una clave secreta para la sesión
    resave: false,
    saveUninitialized: false,
  })
);
app.use(adminJs.options.rootPath, router);
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());
// session secret
app.use(passport.initialize());
app.use(passport.session());
require("./utils/auth");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});

const uri = process.env.DB_URI;
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port: ${port}...`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));

app.use(mainRouter);
