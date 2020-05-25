import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";// функции с редюсара создающие action
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

//берём данные из state и закидываем в  пропс
let  mapStateToProps=(state)=>{
    return{
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText
    }
}
//Передаём колбеки (они внутри себя диспачется сответсвенно и название)
let mapDispatchToProps=(dispatch)=>{
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action)
            },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

//Вызываем connect функцыю два раза 1 передаём mapStateToProps,mapDispatchToProps вторым презентационную коспоненту Dialogs
const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
