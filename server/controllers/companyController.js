const {
    getCompany,
    createCompany,
    editCompany,
    deleteCompany,
} = require("../services/companyServices");

// get company

const getCompanyController = async (req, res) => {
    const { companyName } = req.body;
    try {
        const savedCompany = await getCompany(companyName);
        res.status(200).send(savedCompany);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};


// create company

const createCompanyController = async (req, res) => {
    const { name, logo, description } = req.body;
    try {
        if (name && logo && description) {
            const savedCompany = await createCompany(
                name,
                logo,
                description
            );
            res.status(201).send(savedCompany);
        } else {
            res.status(404).send("Missing data");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

// edit company

const editCompanyController = async (req, res) => {
    const { company, companyLogo } = req.body;
    const { companyId } = req.params;
    try {
        if (companyId && company) {
            const updatedCompany = await editCompany(
                companyLogo,
                companyId,
                company
            );
            res.send(updatedCompany);
        } else {
            res.status(500).send("Missing data");
        }
    } catch (error) {
        res.status(500).send(error);
    }
};

// delete company

const deleteCompanyController = async (req, res) => {
    const { id } = req.params;

    try {
        const savedCompany = await deleteCompany(id);
        res.status(200).send(savedCompany);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

module.exports = {
    getCompanyController,
    createCompanyController,
    editCompanyController,
    deleteCompanyController,
};
