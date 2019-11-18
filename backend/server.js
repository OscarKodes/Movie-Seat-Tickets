// SET UP REQUIREMENTS ===========================
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

// REQUIRE ROUTE FILES ==========================
const movieRoutes = require("./routes/movies");
const ticketRoutes = require("./routes/tickets");

// APP USE ======================================
app.use(cors());
app.use(express.json()); // bodyParser and JSON functionality

// MONGOT ATLAS CONNECTION ======================
const url = "mongodb://localhost:27017/movieDB" || process.env.ATLAS_URL;
mongoose.connect(url, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.connection.once("open", () => {
    console.log(`MongoDB database connection established at: ${url}`);
});

// ROUTERS ======================================
app.use("/movies/", movieRoutes);
app.use("/movies/:id/tickets", ticketRoutes);

// LISTENER =====================================
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});