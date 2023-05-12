import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const CancelButton = ({ path }) => {
    return (
        <div
            className="cancelButton"
            style={{
                marginTop: "5",
                width: "6%",
                fontSize: "12px"
            }}
        >
            <Link to={path}>
                <h1>Cancel</h1>
            </Link>
        </div>
    )
}

CancelButton.propTypes = {
    path: PropTypes.string
}

export default CancelButton
