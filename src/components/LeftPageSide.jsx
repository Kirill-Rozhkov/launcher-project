import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import CharacteristicsList from "./CharacteristicsList"

const LeftPageSide = ({ game }) => {
    return (
        <div className="leftSide">
            <h1 className="gameName">{game.title}</h1>
            <img src={game.sources.image} alt="Logo" />
            <CharacteristicsList characteristics={game.characteristics} />
            {game.isSold !== true ? (
                <Link
                    style={{ marginTop: "10%", width: "45%" }}
                    to={{
                        pathname: `/shop/${game.title}/buyPage`,
                        state: { gameProp: game }
                    }}
                    className="firstNavButton"
                >
                    <h1>Buy</h1>
                </Link>
            ) : (
                <div
                    style={{
                        marginTop: "10%",
                        width: "45%",
                        backgroundColor: "rgb(118, 118, 118)",
                        cursor: "default"
                    }}
                    className="firstNavButton"
                >
                    <h1>Game already purchased</h1>
                </div>
            )}
        </div>
    )
}
LeftPageSide.propTypes = {
    game: PropTypes.object
}

export default LeftPageSide
