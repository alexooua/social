import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Massage";


 const Dialogs = (props) => {
     let dialogs = props.dialogsData.dialogsName.map((d,i) =>
         <DialogItem key={i} name={d.name} id={d.id}/>)

     let massagesElements = props.dialogsData.messages.map(
         (m ,i)=> <Message key={i} id={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                {massagesElements}
            </div>
        </div>

    )
}

export default Dialogs
