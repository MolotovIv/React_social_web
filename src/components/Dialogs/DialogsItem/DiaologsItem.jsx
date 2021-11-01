import classes from './../Diaologs.module.css'
import {NavLink} from "react-router-dom";
import React from "react";


const DialogsItem = (props) => {

    let path = "/dialogs/" + props.id;

    return <div className={classes.dialog + ' ' + classes.active}>
        <img src={props.avatar}/>
        <NavLink to={path}>{props.name}</NavLink>

    </div>
}

export default DialogsItem;