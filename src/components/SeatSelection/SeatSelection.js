import React, {Component} from "react";
import SeatGrid from "./SeatGrid/SeatGrid";
import classes from "./SeatSelection.module.css";
import Backdrop from "../Backdrop/Backdrop";

class seatSelection extends Component {

    // componentDidUpdate() {
    //     console.log("Component updated: seatSelection");
    // }
    
    render () {

        let ticketPrice = 12;
        let discounts = [];
        
        if (["Elder", "Child"].includes(this.props.age)) {
            ticketPrice *= 0.8;
            discounts.push(this.props.age);
        }
        if (this.props.selectedTime === "10:30am") {
            ticketPrice *= 0.8
            discounts.push("Matinee");
        }

        let discountNote = discounts.length > 0 ? <p>Discounts: {discounts.join(" & ")}</p> : null;

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
                    <SeatGrid 
                        selectedSeat={this.props.selectedSeat}
                        selectSeatHandler={this.props.selectSeatHandler}/>
                    <p>Selected Seat: {this.props.selectedSeat}</p>
                    <p>Movie: {this.props.selectedMovie.title}</p>
                    <p>Time: {this.props.selectedTime}</p>
                    <label>Email
                        <input 
                            type="text" 
                            placeholder="QueenElsa@Arendelle.com"
                            onChange={this.props.emailChangeHandler}
                            value={this.props.email}/>
                    </label>
                    <label>Age
                        <select 
                            onChange={this.props.ageChangeHandler}
                            value={this.props.age}>
                            <option value="">Select Age</option>
                            <option value="Adult">Adult 18+</option>
                            <option value="Child">Child 0-17</option>
                            <option value="Elder">Elder 55+</option>
                        </select>
                    </label>
                    {discountNote}
                    <label>Price
                        <p><strong>${ticketPrice.toFixed(2)}</strong></p>
                    </label>
                    <button onClick={() => this.props.purchase(ticketPrice.toFixed(2))}>
                        Purchase
                    </button>
                </div>
            </React.Fragment>

        )
    }
}

export default seatSelection;