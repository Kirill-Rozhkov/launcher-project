import React from "react"
import PropTypes from "prop-types"
import { Link, useHistory } from "react-router-dom"

const CancelButton = ({ path }) => {
    const history = useHistory()
    const changeHistory = () => {
        history.push(path)
    }
    return (
        <div
            role="button"
            onClick={changeHistory}
            className="cancelButton"
            style={{
                marginTop: "25px",
                width: "6%",
                fontSize: "12px"
            }}
        >
            <h1>Cancel</h1>
        </div>
    )
}

CancelButton.propTypes = {
    path: PropTypes.string
}

export default CancelButton
