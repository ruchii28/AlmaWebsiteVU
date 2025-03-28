const express = require("express");
const Faculty = require("../models/faculty"); // Import Faculty model
const { Alumni1 } = require("../models/alumnidata"); // Correct import
const router = express.Router();

console.log("🚀 Alumni1 Model Loaded:", Alumni1); // Checking if model is imported correctly

// Faculty Login Route
router.post("/login", async (req, res) => {
    console.log("🔹 Received Login Request:", req.body);
    const { email, password } = req.body;

    try {
        const faculty = await Faculty.findOne({ email, password });
        if (!faculty) {
            console.log("❌ Invalid email or password for:", email);
            return res.status(400).json({ message: "Invalid email or password" });
        }

        console.log("✅ Faculty Login Successful:", faculty.email);
        res.json({ message: "Login successful", email: faculty.email });
    } catch (error) {
        console.error("🚨 Server Error in Login:", error);
        res.status(500).json({ message: "Server error" });
    }
});


router.get("/filter", async (req, res) => {
    console.log("🔹 Filter API Called:", req.query); // Log request query

    try {
        const filters = {};
        if (req.query.registrationNumber) filters.registrationNumber = req.query.registrationNumber;
        if (req.query.batch) filters.batch = req.query.batch;
        if (req.query.department) filters.department = req.query.department;
        if (req.query.fullName) filters.fullName = req.query.fullName;
        if (req.query.email) filters.email = req.query.email;
        if (req.query.contact) filters.contact = req.query.contact;

        console.log("🔍 Applied Filters:", filters);  

        const results = await Alumni1.find(filters);
        console.log("✅ Results Found:", results);  

        res.json(results);
    } catch (error) {
        console.error("🚨 Error in Filter API:", error);
        res.status(500).json({ error: "Error fetching alumni data" });
    }
});

// Filter Routes For Alumni data

module.exports = router;
