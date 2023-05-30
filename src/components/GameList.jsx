import React from "react"
import PropTypes from "prop-types"

import Game from "./Game"
import GamesMap from "./GamesMap"

const GameList = ({ games, handlePaginatePage, allGames, pageName }) => {
    return (
        <>
            {games.length > 0 ? (
                <div>
                    <div className="horizontal-list">
                        <GamesMap games={games} pageName={pageName} />
                    </div>
                    {pageName !== "libary" &&
                        games.length !== allGames.length && (
                            <p
                                role="button"
                                onClick={handlePaginatePage}
                                className="paginatorButton"
                            >
                                Show more
                            </p>
                        )}
                </div>
            ) : (
                <h1 className="noGames">The games are not found</h1>
            )}
        </>
    )
}

GameList.propTypes = {
    games: PropTypes.array,
    allGames: PropTypes.array,
    handlePaginatePage: PropTypes.func,
    pageName: PropTypes.string
}

export default GameList
