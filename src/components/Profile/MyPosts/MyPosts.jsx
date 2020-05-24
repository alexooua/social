import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
// import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    let postsElement = props.posts.map((p, i) => <Post key={i} message={p.message} like={p.likesCount}/>)

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
        // props.dispatch(addPostActionCreator())

    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
        // let action = updateNewPostTextActionCreator(text);
        // props.dispatch(action)
    }

    return (
        <div>
            <h3>My Posts</h3>
            <div>
                <div><textarea ref={newPostElement}
                               placeholder="Put text"
                               onChange={onPostChange}
                               value={props.newPostText}/></div>
                <div>
                    <button onClick={onAddPost}>Add posts</button>
                    <button>Remove</button>
                </div>

            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;
