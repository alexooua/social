import React from "react";
import s from './../Dialogs.module.css';

const Message = (props) => {
    return <div className={s.message}><img src={props.ava} alt={''}/>{props.message}</div>
}

export default Message
