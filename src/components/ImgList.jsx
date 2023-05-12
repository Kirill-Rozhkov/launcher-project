import React from "react"
import PropTypes from "prop-types"

const ImgList = ({ screenshots, bottomValue }) => {
    return (
        <div className="slideContainer">
            <div style={{ bottom: `${bottomValue}%` }} className="imgContainer">
                {screenshots.map((screen) => (
                    <img
                        key={screen}
                        src={`${screen}`}
                        alt="image"
                        className="sliderContent"
                        id={screen}
                    />
                ))}
            </div>
        </div>
    )
}

ImgList.propTypes = {
    screenshots: PropTypes.array,
    bottomValue: PropTypes.number
}

export default ImgList
