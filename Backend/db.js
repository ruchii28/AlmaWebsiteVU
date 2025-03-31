const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/AMS")
    .then(() => {
        console.log("✅ Database Connected Successfully");
    })
    .catch(err => {
        console.error("❌ Database Connection Failed:", err);
        process.exit(1); // Exit the process on failure
    });

module.exports = mongoose;
