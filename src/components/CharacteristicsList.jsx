import React from "react"
import PropTypes from "prop-types"

const CharacteristicsList = ({ characteristics }) => {
    return (
        <ul className="characteristicsList">
            <div className="characteristicsListKeys">
                {Object.keys(characteristics).map((characteristic) => (
                    <li key={characteristic}>
                        <h3>{characteristic}: </h3>
                    </li>
                ))}
            </div>
            <div className="characteristicsListValues">
                {Object.values(characteristics).map((characteristic, id) =>
                    typeof characteristic === "object" ? (
                        characteristic.map((c, id) => (
                            <h3 style={{ margin: "0px" }} key={id}>
                                {c}
                            </h3>
                        ))
                    ) : (
                        <li key={id}>
                            <h3>{characteristic}</h3>
                        </li>
                    )
                )}
            </div>
        </ul>
    )
}

CharacteristicsList.propTypes = {
    characteristics: PropTypes.object
}

export default CharacteristicsList
