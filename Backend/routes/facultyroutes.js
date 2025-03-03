const express = require("express");
const  Faculty  = require("../models/faculty"); // Import Faculty model
const router = express.Router();

// Faculty Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const faculty = await Faculty.findOne({ email, password });
        if (!faculty) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        res.json({ message: "Login successful", email: faculty.email });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
