const { Company } = require("../models/Company.js");
const cloudinary = require("../utils/cloudinarySetup.js");

// get company

const getCompany = async (name) => {
    let companies;

    if (name) {
        companies = await Company.find({
            name: name,
        });
    } else {
        companies = await Company.find();
    }

    return companies;
};


// create company

const createCompany = async (name, logo, description) => {
    if (name && logo && description) {
        const uploadedResponse = await cloudinary.uploader.upload(logo, {
            upload_preset: "healthy-market",
        });

        const newCompany = new Company({
            name,
            description,
            logo: uploadedResponse,
        });

        const savedCompany = await newCompany.save();

        return savedCompany;
    } else {
        return "Missing data";
    }
};

// edit company

const editCompany = async (companyLogo, companyId, company) => {
    if (companyLogo) {
        const destroyResponse = await cloudinary.uploader.destroy(
            company.image.public_id
        );

        if (destroyResponse) {
            const uploadedResponse = await cloudinary.uploader.upload(companyLogo, {
                upload_preset: "online-shop",
            });

            if (uploadedResponse) {
                const updatedCompany = await Company.findByIdAndUpdate(
                    companyId,
                    {
                        $set: {
                            ...company,
                            logo: uploadedResponse,
                        },
                    },
                    { new: true }
                );
                return updatedCompany;
            }
        }
    } else {
        const updatedCompany = await Company.findByIdAndUpdate(
            companyId,
            {
                $set: {
                    ...company,
                },
            },
            { new: true }
        );
        return updatedCompany;
    }
};

// delete company

const deleteCompany = async (companyId) => {
    const company = await Company.findById(companyId);

    if (!company) return "Company not found... ";

    if (company.image.public_id) {
        const destroyResponse = await cloudinary.uploader.destroy(
            company.image.public_id
        );
        if (destroyResponse) {
            const deletedCompany = await Company.findByIdAndDelete(companyId);

            return deletedCompany;
        }
    } else {
        console.log("Action terminated. Failed to deleted logo image ... ");
    }
};

module.exports = {
    getCompany,
    createCompany,
    editCompany,
    deleteCompany,
};
