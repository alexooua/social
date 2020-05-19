import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 11},
                {id: 2, message: "It's my first post", likesCount: 32},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dimych", ava: "https://materiell.com/wp-content/uploads/2015/03/john-full.png"},
                {id: 2, name: "Andrey", ava: "https://materiell.com/wp-content/uploads/2015/03/john-full.png"},
                {id: 3, name: "Sveta", ava: "https://materi ell.com/wp-content/uploads/2015/03/john-full.png"},
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
        },
        sidebar: {
            friends: [
                {id: 1, name: "Dimych", ava: "https://materiell.com/wp-content/uploads/2015/03/john-full.png"},
                {id: 2, name: "Sveta", ava: "https://materiell.com/wp-content/uploads/2015/03/john-full.png"},
                {id: 3, name: "Viktor", ava: "https://materiell.com/wp-content/uploads/2015/03/john-full.png"}
            ]


        },
    },
    _callSubscriber() {
        console.log("change")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer

    },


    dispatch(action) {

        this._state.profilePage=profileReducer(this._state.profilePage,action)
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage,action)
        this._state.sidebar=sidebarReducer(this._state.sidebar,action)

        this._callSubscriber(this._state)
    }
}

export default store
window.store = store

