import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add posts</button>
                <button>Remove</button>

            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' like={1} />
                <Post message="It's my first post" like={32} />
            </div>
        </div>
    )
}

export default MyPosts;