import React from "react"
import './Header.module.scss'
import logo from './logo.svg'
import Nav from "../Nav/Nav";

const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Nav/>
        </header>
    )
}

export default Header
