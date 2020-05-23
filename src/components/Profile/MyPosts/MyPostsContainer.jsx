import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let postsElement = props.posts.map((p, i) => <Post key={i} message={p.message} like={p.likesCount}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        // props.addPost()
        props.dispatch(addPostActionCreator())

    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        // props.updateNewPostText(text)
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    }

    return (
         <MyPosts/>
    )
}

export default MyPostsContainer;
