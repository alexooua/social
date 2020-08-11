import React from 'react';
import s from './ProfileInfo.module.css'
import profileImg from "../../../assets/images/fartux1055b_large-880x176.jpg";
const ProfileInfo = () => {
    return (

        <div>
            <div className={s.screen}>
                <img
                    src={profileImg}
                    alt=""/>
            </div>
            <div>
                Ava+description
            </div>
        </div>

    )
}

export default ProfileInfo;
