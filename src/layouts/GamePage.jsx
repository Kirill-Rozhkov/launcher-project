import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useParams } from "react-router-dom"

import api from "../api"

import LayoutWithHeader from "../components/LayoutWithHeader"

import LeftPageSide from "../components/LeftPageSide"
import RightPageSide from "../components/RightPageSide"

import "../css/gamePage/gamePage.css"

const GamePage = ({ games }) => {
    const [game, setGame] = useState()
    const title = useParams()
    const { gameTitle } = title
    useEffect(() => {
        api.games.getByTitle(gameTitle).then((data) => {
            setGame(data)
        })
    }, [])
    return (
        <LayoutWithHeader games={games}>
            {game ? (
                <div className="gameContainer">
                    <LeftPageSide game={game} />
                    <RightPageSide
                        screenshots={game.sources.screenshots}
                        video={game.sources.video}
                    />
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </LayoutWithHeader>
    )
}
GamePage.propTypes = {
    games: PropTypes.array
}

export default GamePage
