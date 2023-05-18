import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import Game from "./Game"
import { paginator } from "../utils/paginator"

const GameList = ({ games, handlePaginatePage, allGames, pageSize }) => {
    return (
        <>
            {games.length > 0 ? (
                <div>
                    <div className="horizontal-list">
                        {games.map((game) => (
                            <div key={game.id}>
                                <Game game={game} />
                            </div>
                        ))}
                    </div>
                    {/* games.length > pageSize && */}
                    {games.length !== allGames.length && (
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
                <h1 className="noGames">Here is no games</h1>
            )}
        </>
    )
}

GameList.propTypes = {
    games: PropTypes.array,
    allGames: PropTypes.array,
    handlePaginatePage: PropTypes.func,
    pageSize: PropTypes.number
}

export default GameList
