import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsInfo from "./Friends/FriendsInfo";

const Navbar = (props) => {
    let friendsInfo = props.stete.friends.map(f => <FriendsInfo key={f.id} name={f.name} ava={f.ava}/>)
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink></div>
            <div className={s.item}><NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink></div>
            <div className={s.item}><NavLink to='/news' activeClassName={s.activeLink}>News</NavLink></div>
            <div className={s.item}><NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink></div>
            <div className={s.item}><NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink></div>
            <div className={s.friendsItem}><h3>Friends</h3><div className={s.friendsMy}>{friendsInfo}</div></div>
        </nav>
    )
}

export default Navbar;
