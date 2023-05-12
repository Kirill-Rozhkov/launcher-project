import React from "react"
import PropTypes from "prop-types"

import Header from "./Header"
import NavBar from "./NavBar"

const LayoutWithHeader = ({ children, games }) => {
    return (
        <>
            <div className="container">
                <Header games={games} />
                <div className="bodyContainer">
                    <NavBar />
                    <div className="switch">{children}</div>
                </div>
            </div>
        </>
    )
}

LayoutWithHeader.propTypes = {
    games: PropTypes.array,
    children: PropTypes.node.isRequired
}

export default LayoutWithHeader
