import React from "react";
import SeatGrid from "./SeatGrid/SeatGrid";
import classes from "./SeatSelection.module.css";
import Backdrop from "../Backdrop/Backdrop";

const seatSelection = (props) => {

    return (
        <React.Fragment>
            <Backdrop 
                show={props.showSeats} 
                clicked={props.toggleSeats}/>
            <div 
                className={classes.SeatSelection}
                style={{
                    transform: props.showSeats ? "translateY(0)" : "translateY(100vh)",
                    opacity: props.showSeats ? "1" : "0"
                }}>
                <p onClick={props.toggleSeats}>X Cancel</p>
                seat selection
                <SeatGrid/>
            </div>
        </React.Fragment>

    )
}

export default seatSelection;