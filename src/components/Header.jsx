import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import Search from "./Search"

import "../css/header.css"

const Header = ({ games }) => {
    return (
        <div className="header">
            <div className="logoContainer">
                <div className="logo">
                    <Link to={"/"}>
                        <h1>Header 1</h1>
                    </Link>
                </div>
            </div>
            <div className="searchContainer">
                <h1>Game Launcher</h1>
                <Search games={games} />
            </div>
            <div className="authorization">
                <Link to={"/login"}>
                    <h2 className="loginText">Log in</h2>
                </Link>
                <Link to={"/signup"}>
                    <h2 className="signupText">Sign up</h2>
                </Link>
            </div>
        </div>
    )
}
Header.propTypes = {
    games: PropTypes.array
}

export default Header
