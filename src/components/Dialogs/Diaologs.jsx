import classes from './Diaologs.module.css'
import React from "react";
import DialogsItem from "./DialogsItem/DiaologsItem";
import Message from "./Messages/Massges";


const Dialogs = (props) => {


    let dialogsElements= props.state.dialogs.map(d =><DialogsItem name={d.name} id={d.id} avatar={d.avatar}/> );


let massagesElement = props.state.messages.map(m => <Message message={m.message}/>)

    let newPostElement = React.createRef();

    let addMessage = () => {
        let text = newPostElement.current.value;
        props.addMessage(text);
    }

    let onChange= ()=> {
        let text = newPostElement.current.value;
        props.updateMessage(text);
    }

       return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={classes.masseges}>
                {massagesElement}
                <div >
                    <textarea onChange={onChange} ref={newPostElement} value={props.newMessage}/>
                </div>
            <div>
                <button onClick={addMessage}>add message</button>
            </div>
            </div>
        </div>
    )
}
export default Dialogs;