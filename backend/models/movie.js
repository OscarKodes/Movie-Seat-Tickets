const mongoose = require("mongoose");

const ticketSchema = {
    showDate: Date,
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