import React from 'react';
import './Profile.module.css';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={s.screem}>
                <img
                    src="https://fartux.ru/wp-content/uploads/2018/03/fartux1055b_large-880x176.jpg"
                    alt=""/>
            </div>
            <div>
                Ava+description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;