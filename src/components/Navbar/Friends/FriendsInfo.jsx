import React from 'react';
import s from './FriendsInfo.module.css'

const FriendsInfo = (props) => {
    return (

        <div className={s.item}>
            <img src={props.ava} alt={props.name}/>
            <div className={s.fiendName}><span>{props.name}</span></div>
        </div>

    )
}

export default FriendsInfo;
