import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer"; // функции с редюсара создающие action
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


//берём данные из state и закидываем в  пропс
let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage


    }
}
//Передаём колбеки (они внутри себя диспачется сответсвенно и название)
// когда мы запускаем функцию MapStateToProps происходит сравнение
// данных и если данные изменены происходит перерисовка
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}
//Вызываем connect функцыю два раза 1 передаём mapStateToProps,mapDispatchToProps вторым презентационную коспоненту Dialogs
const DialogsContainer=connect(mapStateToProps,mapDispatchToProps)(Dialogs)
export default DialogsContainer
