import React from "react"
import PropTypes from "prop-types"

import LayoutWithHeader from "../components/LayoutWithHeader"

const Main = ({ games }) => {
    return (
        <LayoutWithHeader games={games}>
            <h1>Main</h1>
        </LayoutWithHeader>
    )
}
Main.propTypes = {
    games: PropTypes.array
}

export default Main
