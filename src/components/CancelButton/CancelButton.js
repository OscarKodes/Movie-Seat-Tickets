import React from "react";
import classes from "./CancelButton.module.css";

const cancelButton = (props) => (
    <div 
        className={classes.CancelButton}
        onClick={props.click}>
        <i on class="fas fa-times fa-lg"></i>
    </div>
    
)

export default cancelButton;