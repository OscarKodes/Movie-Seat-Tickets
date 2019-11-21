import React from "react";
import classes from "./Seat.module.css"

const seat = (props) => {

    let divClass = [classes.Seat];
    if (props.selectedSeat === props.children.join("")) {
        divClass.push(classes.Selected);
    }

    return (
        <div
            className={divClass.join(" ")}
            onClick={() => props.selectSeatHandler(props.children.join(""))}>
            {props.children}
        </div>
    )
}

export default seat;