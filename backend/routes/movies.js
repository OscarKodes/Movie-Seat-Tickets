const router = require("express").Router();
const Movie = require("../models/movie");

// INDEX ROUTE 
router.get("/", (req, res) => {

    Movie.find({}, (err, foundMovies) => {
        if (err) {
            console.log(err);
            res.status(400).json("Error: " + err);
        } else {
            res.status(200).json(foundMovies);
        }
    });
});

// CREATE ROUTE
router.post("/", (req, res) => {
    
    Movie.create(req.body.movie, (err, newMovie) => {
        if (err) {
            console.log(err);
            res.status(400).json("Error: " + err);
        } else {
            res.status(200).json("New movie added");
        }
    })
});

// SHOW ROUTE 
router.get("/:id", (req, res) => {
    Movie.findById(req.params.id, (err, foundMovie) => {

        if (err) {
            console.log(err);
            res.status(400).json("Error: " + err);
        } else {
            res.status(200).json(foundMovie);
        }
    });
});

// UPDATE ROUTE
router.put("/:id", (req, res) => {
    Movie.findByIdAndUpdate(req.params.id, req.body.movie, (err, updatedMovie) => {

        if (err) {
            console.log(err);
            res.status(400).json("Error: " + err);
        } else {
            res.status(200).json("Movie updated");
        }
    });
});

// DESTROY ROUTE
router.delete("/:id", (req, res) => {
    Movie.findByIdAndDelete(req.params.id, (err, deletedMovie) => {
        if (err) {
            console.log(err);
            res.status(400).json("Error: " + err);
        } else {
            res.status(200).json("Movie deleted");
        }
    });
});

module.exports = router;