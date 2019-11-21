import React from "react";
import classes from "./MovieCard.module.css";

const TIMES = [
    "10:30am",
    "1:30pm",
    "4:30pm",
    "7:30pm"
]

const movieCard = (props) => {

    const timeButtons = TIMES.map(time => {
        return (
            <p 
                key={time}
                onClick={props.toggleSeats}>{time}</p>
        );
    });

    return (
        <div className={classes.MovieCard}>
            <h2>{props.movie.title}</h2>
            <p>{props.movie.description}</p>
            <div className={classes.TimeSlots}>
                {timeButtons}
            </div> 
        </div>
    )
};

export default movieCard;