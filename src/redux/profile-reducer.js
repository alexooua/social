//константы для определения типов (type) экшенов (action) для исключения ошибок при написании

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
//инициализация первичных данных для state

let initialState={
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 11},
        {id: 2, message: "It's my first post", likesCount: 32},
    ],
    newPostText: ''
}
//блок по обработке экшенов (action) и пиходящих с ними данных
export const profileReducer=(state=initialState,action)=> {
    switch (action.type) {
        case ADD_POST:

            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {
                    id: 3,
                    message: state.newPostText,
                    likesCount: 0
                }]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state
    }

}

// блок функций (action creator) для пропроса в диспачи методов и свойств
//функции колбеки экшен криэйторы (action creat) для правильной передаци данных из места их вызова в редьюсеры
export const addPostActionCreator = () => ({type: ADD_POST})

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer
