// SET UP REQUIREMENTS ===========================
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 5000;

// IF HEROKU ====================================
if (process.env.NODE_ENV === 'production') {

    // Express will serve up production assets
    app.use(express.static(__dirname + '/public'));

    // Express serve up index.html file if it doesn't recognize route
    app.get("/", (req, res) => {
        res.render("index.html");
    });
}

// REQUIRE ROUTE FILES ==========================
const movieRoutes = require("./routes/movies");
const ticketRoutes = require("./routes/tickets");

// APP USE ======================================
app.use(cors());
app.use(express.json()); // bodyParser and JSON functionality

// MONGOT ATLAS CONNECTION ======================
const url = process.env.ATLAS_URL || "mongodb://localhost:27017/movieDB";
mongoose.connect(url, {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
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