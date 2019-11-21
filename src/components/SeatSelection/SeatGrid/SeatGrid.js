import React from "react";
import Seat from "./Seat/Seat";
import classes from "./SeatGrid.module.css"

const rows = ["A", "B", "C", "D"];
const cols = ["1", "2", "3", "4"];

const seatGrid = (props) => {

    let allSeats = rows.map(row => {
        let rowSeats = cols.map(col => {
            return (
                <Seat 
                    key={col} 
                    selectedSeat={props.selectedSeat} 
                    selectSeatHandler={props.selectSeatHandler}>
                    {row}{col}
                </Seat>
            )
        });
        return (
            <div key={row}>
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