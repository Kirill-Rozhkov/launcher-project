import React from "react"
import PropTypes from "prop-types"

import LayoutWithHeader from "../components/LayoutWithHeader"

const Libary = ({ games }) => {
    return (
        <LayoutWithHeader games={games}>
            <h1>Libary</h1>
        </LayoutWithHeader>
    )
}
Libary.propTypes = {
    games: PropTypes.array
}

export default Libary
