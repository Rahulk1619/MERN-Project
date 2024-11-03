const User = require("../models/user-model");
const Contact = require("../models/contact-model");

// Logic to get All Users
const getAllUsers = async(req, res) => {
    try {
        const users = await User.find({},{password:0});
        console.log(users);
        if(!users || users.length === 0){
            return res.status(400).json({message: "No Users Found"});
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};  

// User edit logic
const getUserById = async(req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({_id: id}, { password:0 });
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};


// User Update Logic
const updateUserById = async(req,res) => {
    try {
        const id = req.params.id;
        const updateUserData = req.body;

        const updateUser = await User.updateOne({_id:id}, 
            {
                $set:updateUserData,
            });
            return res.status(200).json(updateUser);
    } catch (error) {
        console.log(error);
    }
}

// User delete logic
const deleteUserById = async(req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({_id: id});
        return res.status(200).json({message: "User Deleted Successfully"});
    } catch (error) {
        next(error);
    }
};


// Logic to get All Contact
const getAllContacts = async(req, res) => {
    try {
        const contacts = await Contact.find();
        console.log(contacts);
        if(!contacts || contacts.length === 0){
            return res.status(400).json({message: "No Contact Found"});
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
};

// contact delete logic
const deleteContactById = async(req, res) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id: id});
        return res.status(200).json({message: "Contact Deleted Successfully"});
    } catch (error) {
        next(error);
    }
};

module.exports = { getAllUsers, getAllContacts, deleteUserById, getUserById, updateUserById, deleteContactById};