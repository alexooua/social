import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>

            <div className={s.logo}>
                <div><img src="https://cdn.worldvectorlogo.com/logos/react.svg" alt=""/></div>
            </div>
            <div className={s.label}><h3>cool<span>S</span>cial<span>N</span>etwork</h3></div>
        </header>
    )
}

export default Header;

