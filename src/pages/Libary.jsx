import React from "react"
import PropTypes from "prop-types"

import LayoutWithHeader from "../components/LayoutWithHeader"
import GameList from "../components/GameList"

const Libary = ({ games, handlePaginatePage, pageSize }) => {
    const gamesList = games.filter((game) => game.isSold === true)
    return (
        <LayoutWithHeader games={games}>
            {games ? (
                <GameList
                    games={gamesList}
                    allGames={games}
                    handlePaginatePage={handlePaginatePage}
                    pageSize={pageSize}
                />
            ) : (
                <h1>Loading...</h1>
            )}
        </LayoutWithHeader>
    )
}
Libary.propTypes = {
    games: PropTypes.array,
    handlePaginatePage: PropTypes.func,
    pageSize: PropTypes.number
}

export default Libary
