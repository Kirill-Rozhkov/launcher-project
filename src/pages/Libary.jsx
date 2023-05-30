import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

import LayoutWithHeader from "../components/LayoutWithHeader"

import { filterText } from "../utils/fiterText.js"

import GameList from "../components/GameList"
import SearchFiled from "../components/SearchField"

import "../css/libary.css"

const Libary = ({ games, handlePaginatePage, pageSize }) => {
    const allGamesList = games.filter((game) => game.isSold === true)
    const [gamesList, setGameList] = useState(allGamesList)
    const [data, setData] = useState({ search: "" })
    const handleChange = ({ target }) => {
        setData((prev) => ({
            ...prev,
            [target.name]: target.value
        }))
    }

    useEffect(() => {
        if (data.search !== "") {
            setGameList(filterText(data.search, gamesList))
        } else {
            setGameList(allGamesList)
        }
    }, [data])
    return (
        <LayoutWithHeader games={games}>
            {games ? (
                <div className="libaryContainer">
                    <div className="gamesListLibary">
                        <GameList
                            games={gamesList}
                            allGames={games}
                            handlePaginatePage={handlePaginatePage}
                            pageName={"libary"}
                        />
                    </div>
                    <div className="searchLibary">
                        <div className="searchContainer">
                            <SearchFiled
                                label={"Search"}
                                onChange={handleChange}
                                value={data.search}
                                name="search"
                            />
                        </div>
                    </div>
                </div>
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
