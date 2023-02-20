const companyRouter = require("express").Router();
const {
    getCompanyController,
    createCompanyController,
    editCompanyController,
    deleteCompanyController,
} = require("../controllers/companyController.js");

// GET ALL COMPANIES

companyRouter.get("/", getCompanyController);

// CREATE COMPANY

companyRouter.post("/", createCompanyController);

// EDIT COMPANY

companyRouter.put("/editCompany/:companyId", editCompanyController);

// DELETE COMPANY

companyRouter.delete("/:id", deleteCompanyController);

module.exports = companyRouter;
