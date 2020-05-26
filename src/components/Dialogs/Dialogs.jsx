import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Massage";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let state=props.dialogsPage

    let dialogs = state.dialogs.map((d, i) =>

        <DialogItem key={i} name={d.name} id={d.id} ava={d.ava}/>)

    let massagesElements =  state.messages.map(
        (m, i) => <Message key={i} id={m.id} message={m.message} ava={m.ava}/>)

    let newMessageBody = state.newMessageBody



    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange  = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
       // props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogs}
            </div>
            <div className={s.messages}>
                <div>{massagesElements}</div>

                <div>
                    <div>
                    <textarea onChange={onNewMessageChange }
                              value={newMessageBody}
                              placeholder='Enter your message'>
                    </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Dialogs
