import React from "react"
import { useLocation } from "react-router-dom"

import LayoutWithHeader from "../components/LayoutWithHeader"

import GameList from "../components/GameList"

const FiltredGamesPage = () => {
    const location = useLocation()
    const games = location.state.gamesArr
    const filtredGames = location.state.filtredGamesArr

    return (
        <LayoutWithHeader games={games}>
            <GameList games={filtredGames} />
        </LayoutWithHeader>
    )
}

export default FiltredGamesPage
