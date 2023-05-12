import React from "react"
import PropTypes from "prop-types"

import LayoutWithHeader from "../components/LayoutWithHeader"

import GameList from "../components/GameList"

import "../css/shop.css"

const Shop = ({ games }) => {
    return (
        <LayoutWithHeader games={games}>
            <GameList games={games} />
        </LayoutWithHeader>
    )
}

Shop.propTypes = {
    games: PropTypes.array
}

export default Shop
