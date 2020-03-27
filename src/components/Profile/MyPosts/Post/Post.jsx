import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div
            className={s.item}>
            <img src="https://materiell.com/wp-content/uploads/2015/03/john-full.png" alt=""/>
            {props.message}
            <div><span>Like {props.like}</span></div>
        </div>
        
    )
}

export default Post;