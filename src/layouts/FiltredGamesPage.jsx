import React from "react"
import PropTypes from "prop-types"
import { useLocation } from "react-router-dom"

import LayoutWithHeader from "../components/LayoutWithHeader"

import GameList from "../components/GameList"

const FiltredGamesPage = ({ allGames, handlePaginatePage }) => {
    const location = useLocation()
    const filtredGames = location.state.filtredGamesArr

    return (
        <LayoutWithHeader games={allGames}>
            <GameList
                games={filtredGames}
                allGames={allGames}
                handlePaginatePage={handlePaginatePage}
                pageName={"libary"}
            />
        </LayoutWithHeader>
    )
}
FiltredGamesPage.propTypes = {
    allGames: PropTypes.array,
    handlePaginatePage: PropTypes.func
}

export default FiltredGamesPage
