import React from "react";
import classes from "./Seat.module.css"

const seat = (props) => {

    return (
        <div className={classes.Seat}>
            {props.children}
        </div>
    )
}

export default seat;