//константы для определения типов (type) экшенов (action) для исключения ошибок при написании

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'
//инициализация первичных данных для state

let initialState = {
 dialogs: [
  {id: 1, name: "Dimych", ava: "https://materiell.com/wp-content/uploads/2015/03/john-full.png"},
  {id: 2, name: "Andrey", ava: "https://materiell.com/wp-content/uploads/2015/03/john-full.png"},
  {id: 3, name: "Sveta", ava: "https://materiell.com/wp-content/uploads/2015/03/john-full.png"},
  {id: 4, name: "Sasha", ava: "https://materiell.com/wp-content/uploads/2015/03/john-full.png"},
  {id: 5, name: "Viktor", ava: "https://materiell.com/wp-content/uploads/2015/03/john-full.png"},
  {id: 6, name: "Valera", ava: "https://materiell.com/wp-content/uploads/2015/03/john-full.png"},
 ],
 messages: [
  {id: 1, ava: "https://materiell.com/wp-content/uploads/2015/03/john-full.png", message: "hi"},
  {id: 2, ava: "https://materiell.com/wp-content/uploads/2015/03/john-full.png", message: "How are you?"},
  {
   id: 3,
   ava: "https://materiell.com/wp-content/uploads/2015/03/john-full.png",
   message: "I am fine and you."
  },
  {
   id: 4,
   ava: "https://materiell.com/wp-content/uploads/2015/03/john-full.png",
   message: "Fine and Cool!!!"
  }
 ]
 ,
 newMessageBody: ''
}
//блок по обработке экшенов (action) и пиходящих с ними данных
export const dialogsReducer = (state=initialState, action) => {
 //делаем копирование обекта
 switch (action.type) {

  case UPDATE_NEW_MESSAGE_BODY:
   return {
    ...state,
    newMessageBody: action.body
   }

  case SEND_MESSAGE:

   return {
    ...state,
    messages: [...state.messages, {
     id: 5,
     ava: "https://materiell.com/wp-content/uploads/2015/03/john-full.png",
     message: state.newMessageBody
    }],
    newMessageBody: ''
   }

  default:
   return state
 }
}
// блок функций (action creator) для пропроса в диспачи методов и свойств
//функции колбеки экшен криэйторы (action creat) для правильной передаци данных из места их вызова в редьюсеры
export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer
