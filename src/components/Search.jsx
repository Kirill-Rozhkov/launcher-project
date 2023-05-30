import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import { filterText } from "../utils/fiterText"
import SearchFiled from "./SearchField"

const Search = ({ games, label }) => {
    const [text, setText] = useState("")
    const [searchText, setSearchText] = useState([])
    const [filtredGames, setFiltredGames] = useState()
    const count = 5
    const handleChange = (e) => {
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
            <SearchFiled
                label={label}
                onChange={handleChange}
                value={text}
                name={"search"}
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
                                filtredGamesArr: filtredGames
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
    games: PropTypes.array,
    label: PropTypes.string
}

export default Search
