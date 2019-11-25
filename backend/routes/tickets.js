const router = require("express").Router({mergeParams: true});
const Movie = require("../models/movie");

// INDEX ROUTE 
router.get("/", (req, res) => {

    Movie.findById(req.params.id, (err, foundMovie) => {
        if (err) {
            console.log(err);
            res.status(400).json("Error: " + err);
        } else {
            res.status(200).json(foundMovie.orders);
        }
    });
});

// CREATE ROUTE
router.post("/", (req, res) => {

    Movie.findById(req.params.id, (err, foundMovie) => {
        if (err) {
            console.log(err);
            res.status(400).json("Error: " + err);
        } else {
            foundMovie.orders.unshift(req.body.ticket);
            foundMovie.save();
            res.status(200).json(foundMovie);
        }
    });
});

// SHOW ROUTE 
router.get("/:ticket_id", (req, res) => {

    Movie.findById(req.params.id, (err, foundMovie) => {
        if (err) {
            console.log(err);
            res.status(400).json("Error: " + err);
        } else {
            const ordersCopy = foundMovie.orders.slice();
            const foundTicket = ordersCopy.filter(ticket => ticket._id.equals(req.params.ticket_id))[0];
            res.status(200).json(foundTicket);
        }
    });
});

// UPDATE ROUTE
router.put("/:ticket_id", (req, res) => {

    Movie.findById(req.params.id, (err, foundMovie) => {
        if (err) {
            console.log(err);
            res.status(400).json("Error: " + err);
        } else {
            const ordersCopy = foundMovie.orders.slice();
            const foundTicket = ordersCopy.filter(ticket => ticket._id.equals(req.params.ticket_id))[0];
            const idx = foundMovie.orders.indexOf(foundTicket);
            foundMovie.orders.splice([idx], 1);
            foundMovie.orders.unshift(req.body.ticket);
            foundMovie.save();
            res.status(200).json(foundMovie);
        }
    });
});

// DESTROY ROUTE
router.delete("/:ticket_id", (req, res) => {

    Movie.findById(req.params.id, (err, foundMovie) => {
        if (err) {
            console.log(err);
            res.status(400).json("Error: " + err);
        } else {
            let idx = foundMovie.orders.findIndex(order => order._id.equals(req.params.ticket_id));
            foundMovie.orders.splice(idx, 1);
            foundMovie.save();
            res.status(200).json("Ticket order deleted");
        }
    });
});

module.exports = router;