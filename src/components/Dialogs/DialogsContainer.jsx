import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";// функции с редюсара создающие action
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


//берём данные из state и закидываем в  пропс
let mapStateToProps=(state)=>{
    return{
        dialogsPage: state.dialogsPage


    }
}
//Передаём колбеки (они внутри себя диспачется сответсвенно и название)
let mapDispatchToProps=(dispatch)=>{
    return{
        updateNewMessageBody: ()=>{
            dispatch(sendMessageCreator())
        },
        sendMessage: (body)=>{
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}
//Вызываем connect функцыю два раза 1 передаём mapStateToProps,mapDispatchToProps вторым презентационную коспоненту Dialogs
const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs)
export default DialogsContainer
