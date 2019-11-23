import React from "react";
import classes from "./TicketCard.module.css";

const ticketCard = (props) => {

    return (
        <div className={classes.TicketCard}>
            <table>
                <tr>
                    <td>Date: </td><td>{props.ticket.showDate}</td>
                </tr>
                <tr>
                    <td>Time: </td><td>{props.ticket.showTime}</td>
                </tr>
                <tr>
                    <td>Age: </td><td>{props.ticket.age}</td>
                </tr>
                <tr>
                    <td>Email: </td><td>{props.ticket.email}</td>
                </tr>
                <tr>
                    <td>Price: </td><td>${props.ticket.cost}</td>
                </tr>
            </table>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default ticketCard;