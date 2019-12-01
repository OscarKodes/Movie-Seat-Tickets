import React from "react";
import classes from "./TicketCard.module.css";

const ticketCard = (props) => {

    return (
        <div className={classes.TicketCard}>
            <div className={classes.FlexContainer}>
                <table>
                    <tbody>
                        <tr>
                            <td>Date: </td><td>{props.ticket.showDate}</td>
                        </tr>
                        <tr>
                            <td>Time: </td><td>{props.ticket.showTime}</td>
                        </tr>
                        <tr>
                            <td>Seat: </td><td>{props.ticket.selectedSeat}</td>
                        </tr>
                        <tr>
                            <td>Age: </td><td>{props.ticket.age}</td>
                        </tr>
                        <tr>
                            <td>Email: </td><td>{props.ticket.email}</td>
                        </tr>
                        <tr>
                            <td>Price: </td><td>${Number(props.ticket.cost).toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
                <div className={classes.ButtonContainer}>
                    <div className={classes.EditBtn} onClick={() => props.editButton(props.ticket)}>Edit</div>
                    <div className={classes.DeleteBtn} onClick={() => props.deleteOrder(props.ticket._id)}>Delete</div>
                </div>
            </div>

        </div>
    )
}

export default ticketCard;