import React, {Component} from "react";
import SeatGrid from "./SeatGrid/SeatGrid";
import classes from "./SeatSelection.module.css";
import Backdrop from "../Backdrop/Backdrop";

class seatSelection extends Component {

    componentDidUpdate() {
        console.log("Component updated: seatSelection");
    }

    render () {
        return (
            <React.Fragment>
                <Backdrop 
                    show={this.props.showSeats} 
                    clicked={this.props.toggleSeats}/>
                <div 
                    className={classes.SeatSelection}
                    style={{
                        transform: this.props.showSeats ? "translateY(0)" : "translateY(100vh)",
                        opacity: this.props.showSeats ? "1" : "0"
                    }}>
                    <p onClick={this.props.toggleSeats}>X Cancel</p>
                    <p>Movie: {this.props.selectedMovie.title}</p>
                    <p>Time: {this.props.selectedTime}</p>
                    <SeatGrid/>
                </div>
            </React.Fragment>

        )
    }
}

export default seatSelection;