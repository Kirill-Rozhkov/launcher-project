import React from "react"
import PropTypes from "prop-types"
import GameList from "./GameList"
import GamesMap from "./GamesMap"

const GenresForm = ({ games, genre, pageName }) => {
    const filtredGames = games.filter(
        (game) =>
            game.characteristics.genres[0].toLowerCase().trim() ===
            genre.toLowerCase().trim()
    )
    console.log(filtredGames)
    return (
        <div>
            <h3>{genre}</h3>
            <div className="horizontal-list">
                <GamesMap games={filtredGames} pageName={pageName} />
            </div>
        </div>
    )
}
GenresForm.propTypes = {
    games: PropTypes.array,
    genre: PropTypes.string,
    pageName: PropTypes.string
}

export default GenresForm
