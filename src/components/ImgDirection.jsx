import React from "react"
import PropTypes from "prop-types"

const ImgDirection = ({
    direction,
    handleClick,
    counter,
    path,
    screenshotsLength
}) => {
    const checkDirection = () => {
        switch (direction) {
            case "left":
                if (counter === 1) {
                    return "bi-hidden"
                } else {
                    return `bi-chevron-compact-${direction}`
                }
            case "right":
                if (counter === screenshotsLength) {
                    return "bi-hidden"
                } else {
                    return `bi-chevron-compact-${direction}`
                }
        }
    }

    return (
        <button className="arrows">
            <svg
                onClick={() => handleClick(direction)}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className={`bi ${checkDirection(direction)}`}
                viewBox="0 0 16 16"
            >
                <path fillRule="evenodd" d={path} />
            </svg>
        </button>
    )
}

ImgDirection.propTypes = {
    direction: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
    counter: PropTypes.number,
    path: PropTypes.string.isRequired,
    screenshotsLength: PropTypes.number
}

export default ImgDirection
