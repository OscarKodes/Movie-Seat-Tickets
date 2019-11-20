import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import classes from "./MovieList.module.css";

const movieList = () => (
    <div className={classes.MovieList}>
        <h1>This is movieList</h1>
        <MovieCard />
    </div>
)

export default movieList;