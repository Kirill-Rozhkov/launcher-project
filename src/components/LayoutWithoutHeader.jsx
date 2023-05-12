import React from "react"
import PropTypes from "prop-types"

const LayoutWithoutHeader = ({ children }) => {
    return (
        <>
            <div className="container">
                <div className="bodyContainer">
                    <div className="switch">{children}</div>
                </div>
            </div>
        </>
    )
}
LayoutWithoutHeader.propTypes = {
    games: PropTypes.array,
    children: PropTypes.node.isRequired
}

export default LayoutWithoutHeader
