import React from "react";
import classes from "./MovieCard.module.css";

const movieCard = (props) => (
    <div className={classes.MovieCard}>
        <h2>{props.movie.title}</h2>
        <p>{props.movie.description}</p>
        <div className={classes.TimeSlots}>
            <p>10:30am</p>
            <p>1:30pm</p>
            <p>4:30pm</p>
            <p>7:30pm</p>
        </div> 
    </div>
)

export default movieCard;