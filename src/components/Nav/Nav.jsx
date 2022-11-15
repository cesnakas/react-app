import React from 'react'
import { menu } from './menu'
import style from './Nav.module.scss'

const Nav = () => {
    return (
        <nav className={style.nav}>
            <ul className={style['menu-nav']}>
                {menu.map((item, indx) => (
                <li key={`menu item ${indx}`}>
                    <a href={item.link}>{item.title}</a>
                </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav
