import classes from './../Diaologs.module.css'
import React from "react";


const Message = (props) => {
    return <div className={classes.massege}>{props.message}</div>
}


export default Message;