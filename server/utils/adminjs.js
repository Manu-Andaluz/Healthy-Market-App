const AdminJS = require("adminjs");
const AdminJSExpress = require("@adminjs/express");
const AdminJSMongoose = require("@adminjs/mongoose");
const { Product } = require("../models/Product");
const { User } = require("../models/User");
const { Order } = require("../models/Order");
const express = require("express");
const admin = express();

const session = require("cookie-session");

AdminJS.registerAdapter(AdminJSMongoose);
// Very basic configuration of AdminJS.
const adminJs = new AdminJS({
  resources: [{ resource: Product }, { resource: User }, { resource: Order }],
  rootPath: "/admin", // Path to the AdminJS dashboard.
});
// Build and use a router to handle AdminJS routes.
const router = AdminJSExpress.buildRouter(adminJs);

admin.use(adminJs.options.rootPath, router);

admin.use(
  session({
    secret: "mysecret", // una clave secreta para la sesión
    resave: false,
    saveUninitialized: false,
  })
);
admin.use(adminJs.options.rootPath, router);

module.exports = admin;
