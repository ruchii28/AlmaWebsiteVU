const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://anuragbabaojha:Anurag%409262@cluster0.61tqh.mongodb.net/AMS")
    .then(() => {
        console.log("✅ Database Connected Successfully");
    })
    .catch(err => {
        console.error("❌ Database Connection Failed:", err);
    });

module.exports = mongoose;
