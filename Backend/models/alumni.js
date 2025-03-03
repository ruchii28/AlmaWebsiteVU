const mongoose = require("mongoose");

// Alumni Schema
const AlumniSchema = new mongoose.Schema({
    regNo: { type: String, required: true, unique: true },
    batch: { type: String, required: true },
    branch: { type: String, required: true },
    password: { type: String, required: true, },
    email: { type: String, required: true, unique: true },
    dob: { type: Date, required: true }
});



const Alumni = mongoose.model("Alumni", AlumniSchema);


module.exports = { Alumni };
