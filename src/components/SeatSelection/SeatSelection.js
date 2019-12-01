import React, {Component} from "react";
import SeatGrid from "./SeatGrid/SeatGrid";
import classes from "./SeatSelection.module.css";
import Backdrop from "../Backdrop/Backdrop";
import CancelButton from "../CancelButton/CancelButton";

class seatSelection extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.showSeats || nextProps.showSeats !== this.props.showSeats;
    }
    
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

        let discountNote = discounts.length > 0 ? <p>{discounts.join(" & ")}</p> : null;

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
                    <CancelButton click={this.props.toggleSeats}></CancelButton>
                    <h1>{this.props.editTicketSeat ? "Edit Ticket Order" : "Select a Seat"}</h1>
                    <SeatGrid 
                        selectedSeat={this.props.selectedSeat}
                        selectSeatHandler={this.props.selectSeatHandler}
                        allOrders={this.props.selectedMovie.orders}
                        selectedTime={this.props.selectedTime}
                        editTicketSeat={this.props.editTicketSeat}/>
                    <table className={classes.PurchaseTable}>
                        <tbody>
                            <tr>
                                <td>Seat: </td>
                                <td>{this.props.selectedSeat}</td>
                            </tr>
                            <tr>
                                <td>Movie: </td>
                                <td>{this.props.selectedMovie.title}</td>
                            </tr>
                            <tr>
                                <td>Time: </td>
                                <td>{this.props.selectedTime}</td>
                            </tr>
                            <tr>
                                <td>Email: </td>
                                <td>
                                    <input 
                                    type="text" 
                                    placeholder="QueenElsa@Arendelle.com"
                                    onChange={this.props.emailChangeHandler}
                                    value={this.props.email}/>
                                </td>
                            </tr>
                            <tr>
                                <td>Age: </td>
                                <td>
                                    <select 
                                        onChange={this.props.ageChangeHandler}
                                        value={this.props.age}>
                                        <option value="">Select Age</option>
                                        <option value="Adult">Adult 18+</option>
                                        <option value="Child">Child 0-17</option>
                                        <option value="Elder">Elder 55+</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Discounts: </td>
                                <td>
                                    {discountNote}
                                </td>
                            </tr>
                            <tr>
                                <td>Price: </td>
                                <td>
                                    <strong>${ticketPrice.toFixed(2)}</strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div 
                        className={classes.PurchaseBtn}
                        onClick={() => this.props.purchase(ticketPrice.toFixed(2))}
                        color="green">
                        {this.props.editTicketSeat ? "Update" : "Purchase"}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default seatSelection;