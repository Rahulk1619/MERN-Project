const Service = require("../models/service_model");

const services = async (req, res) => {
  try {
    const response = await Service.find();

    if (!response) {
      return res.status(404).json({ msg: "No services found" });
    }

    return res.status(200).json(response);
  } catch (error) {
    console.error(`Error fetching services: ${error.message}`);
    return res.status(500).json({ msg: "Server error" });
  }
};

module.exports = services;
