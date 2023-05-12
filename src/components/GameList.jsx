import React from "react"
import PropTypes from "prop-types"

import Game from "./Game"

const GameList = ({ games }) => {
    return (
        <div className="horizontal-list">
            {games.map((game) => (
                <div key={game.id}>
                    <Game game={game} />
                </div>
            ))}
        </div>
    )
}

GameList.propTypes = {
    games: PropTypes.array
}

export default GameList
