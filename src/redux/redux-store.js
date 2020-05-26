import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
//функция combineReducers объединяет редьюсары
//reducer чистая функцыя которая принимает старый стейт и екшин
//модифицырует стейт если нужно и возваращает изменённый
let reducer=combineReducers({
    profilePage:profileReducer,
    // profileReducer,
    dialogsPage:dialogsReducer,
    // dialogsReducer,
    sidebar:sidebarReducer,
    // sidebarReducer
    usersPage:usersReducer
})

let store =createStore(reducer) //создаём store  спомощю redux

window.store=store

export default store
