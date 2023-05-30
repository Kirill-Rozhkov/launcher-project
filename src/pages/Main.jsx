import React from "react"
import PropTypes from "prop-types"

import LayoutWithHeader from "../components/LayoutWithHeader"
import GenresForm from "../components/GenresForm"

const Main = ({ games }) => {
    return (
        <LayoutWithHeader games={games}>
            <h1>Main</h1>
            <GenresForm games={games} genre={"Action"} pageName={"shop"} />
            <GenresForm games={games} genre={"RPG"} pageName={"shop"} />
            <GenresForm games={games} genre={"Adventure"} pageName={"shop"} />
            <GenresForm
                games={games}
                genre={"Battle Royale"}
                pageName={"shop"}
            />
        </LayoutWithHeader>
    )
}
Main.propTypes = {
    games: PropTypes.array,
    handleBuy: PropTypes.func
}

export default Main
