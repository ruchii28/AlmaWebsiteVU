const express = require("express");
const cors = require("cors");
require("./db");  // ✅ Import db.js (No need to connect MongoDB again)
const alumniRoutes = require("./routes/alumniroutes");
const facultyRoutes = require("./routes/facultyroutes"); // ✅ Import faculty routes
const postRoutes = require('./routes/postRoutes');

const JWT_SECRET = "mySuperSecretKey";

const app = express();
app.use(express.json());  // To parse JSON bodies
app.use(cors());  // To handle CORS issues

// Routes
app.use("/api/alumni", alumniRoutes);
app.use("/api/faculty", facultyRoutes); // ✅ Faculty routes added

app.use("/api/posts",postRoutes);

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to the Alumni & Faculty API!");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
