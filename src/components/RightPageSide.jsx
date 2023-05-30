import React, { useState } from "react"
import PropTypes from "prop-types"

import ImgList from "./ImgList"
import ImgDirection from "./ImgDirection"

const RightPageSide = ({ screenshots, video }) => {
    const [counter, setCounter] = useState(1)
    const [bottomValue, setBottomValue] = useState(0)
    const handleClick = (direction) => {
        switch (direction) {
            case "right":
                counter !== screenshots.length && setCounter(counter + 1)
                setBottomValue(100.7 * counter)
                break
            case "left":
                counter !== 0 && setCounter(counter - 1)
                setBottomValue(bottomValue - 100.7)
                break
        }
    }
    return (
        <div>
            <div className="videoContainer">
                <iframe
                    height="562px"
                    width="1000px"
                    src={video}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="mainSlideContainer">
                <div className="containerSlider">
                    <ImgDirection
                        direction={"left"}
                        handleClick={handleClick}
                        counter={counter}
                        path={
                            "M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"
                        }
                    />
                    <ImgList
                        screenshots={screenshots}
                        bottomValue={bottomValue}
                    />
                    <ImgDirection
                        direction={"right"}
                        handleClick={handleClick}
                        counter={counter}
                        path={
                            "M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
                        }
                        screenshotsLength={screenshots.length}
                    />
                </div>
            </div>
        </div>
    )
}
RightPageSide.propTypes = {
    screenshots: PropTypes.array,
    video: PropTypes.string
}

export default RightPageSide
