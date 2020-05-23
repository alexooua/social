const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState={
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

export const dialogsReducer = (state=initialState, action) => {
 switch (action.type) {
  case UPDATE_NEW_MESSAGE_BODY:
   state.newMessageBody = action.body
   return state
  case SEND_MESSAGE:
   let body = state.newMessageBody;
   state.newMessageBody = ''
   state.messages.push({id: 4, ava: "https://materiell.com/wp-content/uploads/2015/03/john-full.png", message: body})
   return state
  default:
   return state
 }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default dialogsReducer
