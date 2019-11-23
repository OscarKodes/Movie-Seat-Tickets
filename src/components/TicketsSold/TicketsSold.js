import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import TicketCard from "./TicketCard/TicketCard";
import classes from "./TicketsSold.module.css"

const ticketsSold = (props) => {

    let allTickets = null;

    if (props.selectedMovie.orders && props.selectedMovie.orders.length > 0) {
        allTickets = props.selectedMovie.orders.map(ticket => {
            return (
                <TicketCard 
                    key={ticket._id} 
                    ticket={ticket}
                    deleteOrder={props.deleteOrder}/> 
            )
        })
    }

    return (
        <React.Fragment>
            <Backdrop 
                show={props.showTicketsSold} 
                clicked={props.toggleTicketsSold}/>
            <div
                className={classes.TicketsSold}
                style={{
                    transform: props.showTicketsSold ? "translateY(0)" : "translateY(100vh)",
                    opacity: props.showTicketsSold ? "1" : "0"
                }}>
                <p onClick={props.toggleTicketsSold}>X Cancel</p>
                <h1>{props.selectedMovie.title}</h1>
                <h2>Purchased Ticket Orders</h2>
                {allTickets}
            </div>
        </React.Fragment>
    )
}

export default ticketsSold;