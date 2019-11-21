import React from "react";
import Seat from "./Seat/Seat";
import classes from "./SeatGrid.module.css"

let rows = ["A", "B", "C", "D"];
let cols = ["1", "2", "3", "4"];
let coord = [];


const seatGrid = (props) => {

    let allSeats = rows.map(row => {
        let rowSeats = cols.map(col => <Seat>{row}{col}</Seat>);
        return (
            <div>
                {rowSeats}
            </div>
        )
    })


    return (
        <div className={classes.SeatGrid}>
            <p>Screen Here</p>
            {allSeats}
            <p>Back Wall Here</p>
        </div>
    )
}

export default seatGrid;