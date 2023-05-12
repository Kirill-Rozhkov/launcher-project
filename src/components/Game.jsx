import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Game = ({ game }) => {
    return (
        <div className="horizontal-item">
            <Link
                to={{
                    pathname: `/shop/${game.title}`
                }}
            >
                <img src={game.sources.image} alt="logo" />
                <p>{game.title}</p>
            </Link>
        </div>
    )
}

Game.propTypes = {
    game: PropTypes.object,
    games: PropTypes.array
}

export default Game
