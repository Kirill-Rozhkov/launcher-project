import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"

import "../css/navBar.css"

const NavBar = () => {
    const history = useHistory().location.pathname
    const chooseButton = (buttonHistory) => {
        if (buttonHistory === history) {
            return "choosenLink"
        } else {
            return "link"
        }
    }
    return (
        <div className="navContainer">
            <nav className="nav">
                <Link to={"/"} className={chooseButton("/")}>
                    <h1>Main</h1>
                </Link>
                <Link to={"/shop"} className={chooseButton("/shop")}>
                    <h1>Shop</h1>
                </Link>
                <Link to={"/libary"} className={chooseButton("/libary")}>
                    <h1>Libary</h1>
                </Link>
            </nav>
        </div>
    )
}

export default NavBar
