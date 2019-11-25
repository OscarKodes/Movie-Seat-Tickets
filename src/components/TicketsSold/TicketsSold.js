import React, {Component} from "react";
import Backdrop from "../Backdrop/Backdrop";
import TicketCard from "./TicketCard/TicketCard";
import classes from "./TicketsSold.module.css"

class ticketsSold extends Component {

    componentDidUpdate() {
        console.log("tickets sold updated");
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.showTicketsSold || nextProps.showTicketsSold !== this.props.showTicketsSold;
    }

    render() {
        let allTickets = null;

        if (this.props.selectedMovie.orders && this.props.selectedMovie.orders.length > 0) {
            allTickets = this.props.selectedMovie.orders.map(ticket => {
                let num = Math.random();
                return (
                    <TicketCard 
                        key={ticket._id + num} 
                        ticket={ticket}
                        deleteOrder={this.props.deleteOrder}
                        editButton={this.props.editButton}/> 
                )
            })
        }

        return (
            <React.Fragment>
                <Backdrop 
                    show={this.props.showTicketsSold} 
                    clicked={this.props.toggleTicketsSold}/>
                <div
                    className={classes.TicketsSold}
                    style={{
                        transform: this.props.showTicketsSold ? "translateY(0)" : "translateY(100vh)",
                        opacity: this.props.showTicketsSold ? "1" : "0"
                    }}>
                    <p onClick={this.props.toggleTicketsSold}>X Cancel</p>
                    <h1>{this.props.selectedMovie.title}</h1>
                    <h2>Purchased Ticket Orders</h2>
                    {allTickets}
                </div>
            </React.Fragment>
        )
    }
}

export default ticketsSold;