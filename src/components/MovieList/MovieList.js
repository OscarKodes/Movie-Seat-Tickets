import React from "react";
import MovieCard from "./MovieCard/MovieCard";
import classes from "./MovieList.module.css";

const movieList = (props) => {

    let allMovieCards = null;

    if (props.movies.length > 0) {
        allMovieCards = props.movies.map(movie => {
            return (
                <MovieCard 
                    key={movie._id} 
                    movie={movie}
                    timeClick={props.timeClick}
                    toggleTicketsSold={props.toggleTicketsSold}/>
            )
        });
    }

    return (
        <div className={classes.MovieList}>
            <h1>This is movieList</h1>
            {allMovieCards}
        </div>
    )
    
}

export default movieList;