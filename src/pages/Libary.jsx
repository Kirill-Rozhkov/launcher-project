import React from "react"
import PropTypes from "prop-types"

import LayoutWithHeader from "../components/LayoutWithHeader"
import GameList from "../components/GameList"

const Libary = ({ games }) => {
    const gamesList = games.filter((game) => game.isSold === true)
    console.log(gamesList)
    return (
        <LayoutWithHeader games={games}>
            <h1>Libary</h1>
            <GameList games={gamesList} />
        </LayoutWithHeader>
    )
}
Libary.propTypes = {
    games: PropTypes.array
}

export default Libary
