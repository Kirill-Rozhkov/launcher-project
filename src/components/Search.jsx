import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import { filterText } from "../utils/fiterText"

const Search = ({ games }) => {
    const [text, setText] = useState("")
    const [searchText, setSearchText] = useState([])
    const [filtredGames, setFiltredGames] = useState()
    const count = 5
    const handleTextChange = (e) => {
        const { value } = e.target
        setText(value)
    }
    useEffect(() => {
        const foundedGames = filterText(text, games)
        foundedGames && text ? (
            <>
                {setFiltredGames(foundedGames)}
                {setSearchText(foundedGames.slice(0, count))}
            </>
        ) : (
            setSearchText()
        )
    }, [text])

    return (
        <div className="search">
            <input
                value={text}
                onChange={handleTextChange}
                type="text"
                placeholder="Search..."
            />
            {searchText && (
                <div className="searchList">
                    {searchText.map((game) => (
                        <Link
                            to={`/shop/${game.title}`}
                            key={game.title}
                            className="searchListItem"
                        >
                            <img src={game.sources.image} alt="" />
                            <p>{game.title}</p>
                        </Link>
                    ))}
                    <Link
                        to={{
                            pathname: "/shop/filtredGames",
                            state: {
                                filtredGamesArr: filtredGames,
                                gamesArr: games
                            }
                        }}
                        className="searchListItem"
                    >
                        Show more
                    </Link>
                </div>
            )}
        </div>
    )
}
Search.propTypes = {
    games: PropTypes.array
}

export default Search
