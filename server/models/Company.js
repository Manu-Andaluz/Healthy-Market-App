const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    logo: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;