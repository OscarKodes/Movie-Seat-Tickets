const mongoose = require("mongoose");

const ticketSchema = {
    showDate: String,
    showTime: String,
    age: String,
    cost: Number,
    email: String
}

const movieSchema = new mongoose.Schema({
    title: String,
    description: String,
    orders: [ticketSchema]
});

module.exports = mongoose.model("Movie", movieSchema);