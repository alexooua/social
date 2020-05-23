import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let reducer=combineReducers({
    profilePage:profileReducer,
    // profileReducer,
    dialogsPage:dialogsReducer,
    // dialogsReducer,
    sidebar:sidebarReducer
    // sidebarReducer
})

let store =createStore(reducer)
export default store
