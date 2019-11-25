import React from "react";
import classes from "./Seat.module.css"

const seat = (props) => {

    let divClass = [classes.Seat];
    if (props.selectedSeat === props.children.join("")) {
        divClass.push(classes.Selected);
    }
    if (props.seatTaken) {
        if (props.editTicketSeat === props.children.join("")) {
            divClass.push(classes.EditSeat);
        } else {
            divClass.push(classes.Sold);
        }
    }

    return (
        <div
            className={divClass.join(" ")}
            onClick={divClass.includes(classes.Sold) ? null : () => props.selectSeatHandler(props.children.join(""))}>
            {props.children}
        </div>
    )
}

export default seat;