import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Game = ({ game, pageName }) => {
    return (
        <>
            {pageName === "libary" ? (
                <div className="horizontal-item" style={{ cursor: "default" }}>
                    <div>
                        <img src={game.sources.image} alt="logo" />
                        <p>{game.title}</p>
                    </div>
                </div>
            ) : (
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
            )}
        </>
    )
}

Game.propTypes = {
    game: PropTypes.object,
    pageName: PropTypes.string
}

export default Game
