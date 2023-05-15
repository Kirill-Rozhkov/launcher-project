import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link, useHistory, useLocation } from "react-router-dom"

import LayoutWithoutHeader from "../components/LayoutWithoutHeader"

import CancelButton from "../components/CancelButton"

import "../css/gamePage/buyPage.css"

const BuyPage = ({ games, handleBuy }) => {
    const [paymentMethods, setPaymentMethods] = useState()
    const location = useLocation()
    const game = location.state.gameProp
    const gameDiscount = game.discount / 100
    const history = useHistory()

    useEffect(() => {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key[i]
            const value = localStorage.getItem(key)
            try {
                const paymentMethod = JSON.parse(value)
                setPaymentMethods(paymentMethod)
            } catch (e) {
                console.error("Ошибка парсинга объекта из localStorage:", e)
            }
        }
    }, [])

    return (
        <div className="buyPageContainer">
            <LayoutWithoutHeader>
                <div className="buyPageLeftSide">
                    <div>
                        <h1>{game.title}</h1>
                        <img
                            src={game.sources.image}
                            alt="here is the image"
                            style={{
                                width: "300px",
                                height: "450px",
                                borderRadius: "8px"
                            }}
                        />
                    </div>
                    <div>
                        <ul>
                            <li>
                                <h1>Salary: {game.salary}</h1>
                            </li>
                            <li>
                                <h1>Discount: {game.discount}%</h1>
                            </li>
                            <li>
                                <h1>
                                    Total:{" "}
                                    {game.salary - game.salary * gameDiscount}
                                </h1>
                            </li>
                        </ul>
                    </div>
                </div>
                <CancelButton path={`/shop/${game.title}`} />
                <div className="buyPageRightSide">
                    <h2>Payment Methods:</h2>
                    {paymentMethods ? (
                        paymentMethods.map((paymentMethod) => (
                            <div key={paymentMethod.id}></div>
                        ))
                    ) : (
                        <div>
                            <h3>{"You don't have a saved payment method"}</h3>
                            <div
                                className="firstNavButton"
                                style={{
                                    marginTop: "5",
                                    width: "100%",
                                    fontSize: "12px"
                                }}
                            >
                                <Link
                                    to={{
                                        pathname: `/addCard`,
                                        state: {
                                            title: game.title
                                        }
                                    }}
                                >
                                    <h1>Add payment method</h1>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
                <div>
                    <button
                        className="firstNavButton"
                        style={{ marginTop: "10%", width: "80%" }}
                        onClick={() => handleBuy(game, history)}
                    >
                        <h1>Pay for the purchase</h1>
                    </button>
                </div>
            </LayoutWithoutHeader>
        </div>
    )
}
BuyPage.propTypes = {
    games: PropTypes.array,
    handleBuy: PropTypes.func
}

export default BuyPage
