import React from "react"
import { Link } from "react-router-dom"

import "../css/navBar.css"

const NavBar = () => {
    return (
        <div className="navContainer">
            <nav className="nav">
                <Link to={"/"} className="link">
                    <h1 className="">Main</h1>
                </Link>
                <Link to={"/shop"} className="link">
                    <h1 className="">Shop</h1>
                </Link>
                <Link to={"/libary"} className="link">
                    <h1 className="">Libary</h1>
                </Link>
            </nav>
        </div>
    )
}

export default NavBar
