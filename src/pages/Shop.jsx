import React, { useState } from "react"
import PropTypes from "prop-types"

import LayoutWithHeader from "../components/LayoutWithHeader"

import GameList from "../components/GameList"

import "../css/shop.css"

const Shop = ({ games, handlePaginatePage, allGames }) => {
    return (
        <LayoutWithHeader games={games}>
            {games.length > 0 ? (
                <GameList
                    games={games}
                    handlePaginatePage={handlePaginatePage}
                    allGames={allGames}
                />
            ) : (
                <h1>Loading...</h1>
            )}
        </LayoutWithHeader>
    )
}

Shop.propTypes = {
    games: PropTypes.array,
    allGames: PropTypes.array,
    handlePaginatePage: PropTypes.func
}

export default Shop
