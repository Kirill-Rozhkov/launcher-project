import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom"

import API from "./api"

import LogIn from "./layouts/Login"

import FiltredGamesPage from "./layouts/FiltredGamesPage"
import GamePage from "./layouts/GamePage"
import BuyPage from "./layouts/BuyPage"
import PaymentMethod from "./layouts/PaymentMethod"

import NotFound from "./pages/NotFound"
import Main from "./pages/Main"
import Libary from "./pages/Libary"
import Shop from "./pages/Shop"

import "./css/App.css"

function App() {
    const [games, setGames] = useState([])

    const handleBuy = (game) => {
        const sold = game.isSold === false && true
        setGames((gamesList) =>
            gamesList.map((g) => {
                if (g.id === game.id) {
                    return {
                        ...g,
                        isSold: sold
                    }
                }
                return g
            })
        )
        console.log(games)
    }

    useEffect(() => {
        API.games.fetchAll().then((data) => {
            setGames(data)
        })
    }, [])
    return (
        <Switch>
            <Route path={"/"} exact render={() => <Main games={games} />} />
            <Route path={"/libary"} render={() => <Libary games={games} />} />
            <Route path={"/addCard"} render={() => <PaymentMethod />} />
            <Route
                path={"/shop/:gameTitle/buyPage"}
                render={() => <BuyPage games={games} handleBuy={handleBuy} />}
            />
            <Route
                path={"/shop/filtredGames"}
                render={() => <FiltredGamesPage />}
            />
            <Route
                path={"/shop/:gameTitle"}
                render={() => <GamePage games={games} />}
            />
            <Route path={"/shop"} render={() => <Shop games={games} />} />
            <Route path={"/login/:type?"} render={() => <LogIn />} />
            <Route path={"*"} render={() => <NotFound />} />
        </Switch>
    )
}

export default App
