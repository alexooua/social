import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
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
        </div>

    )
}

export default ProfileInfo;
