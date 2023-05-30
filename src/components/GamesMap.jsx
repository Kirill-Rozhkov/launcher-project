import React from "react"
import PropTypes from "prop-types"
import Game from "./Game"

const GamesMap = ({ games, pageName }) => {
    return (
        <>
            {games.map((game) => (
                <div key={game.id}>
                    <Game game={game} pageName={pageName} />
                </div>
            ))}
        </>
    )
}
GamesMap.propTypes = {
    games: PropTypes.array,
    pageName: PropTypes.string
}

export default GamesMap
