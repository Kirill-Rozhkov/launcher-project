import React, { useState, useEffect } from "react"
import { Route, Switch, useHistory } from "react-router-dom"

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
import { paginator } from "./utils/paginator"

function App() {
    const [games, setGames] = useState([])
    const [users, setUsers] = useState([])
    const [isAuth, setIsAuth] = useState(false)
    const [counter, setCounter] = useState(1)
    const pageSize = 7
    const [gamesList, setGamesList] = useState([])
    const handlePaginatePage = () => {
        const paginatedGames = paginator(games, counter, pageSize)
        setGamesList(paginatedGames)
    }
    const handleBuy = (game, history) => {
        history.push("/")
        const sold = game.isSold === false && true
        setGames((games) =>
            games.map((g) => {
                if (g.id === game.id) {
                    return {
                        ...g,
                        isSold: sold
                    }
                }
                return g
            })
        )
    }
    // setUsers((prev) => console.log(prev))
    const changeAuth = () => {
        setIsAuth((prev) => !prev)
    }
    const addUsers = (data) => {
        setUsers((prev) => console.log(prev.push(prev)))
    }

    useEffect(() => {
        API.games.fetchAll().then((data) => {
            setGames(data)
        })
        API.users.fetchAll().then((data) => {
            setUsers(data)
        })
    }, [])
    console.log(users)

    useEffect(() => {
        setGamesList(paginator(games, counter, pageSize))
    }, [games])
    useEffect(() => {
        if (games.length !== 0) {
            setCounter(counter + 1)
        }
    }, [gamesList])
    return (
        <Switch>
            <Route path={"/"} exact render={() => <Main games={games} />} />
            <Route
                path={"/libary"}
                render={() => (
                    <Libary
                        games={games}
                        handlePaginatePage={handlePaginatePage}
                        pageSize={pageSize}
                    />
                )}
            />
            <Route path={"/addCard"} render={() => <PaymentMethod />} />
            <Route
                path={"/shop/:gameTitle/buyPage"}
                render={() => <BuyPage games={games} handleBuy={handleBuy} />}
            />
            <Route
                path={"/shop/filtredGames"}
                render={() => (
                    <FiltredGamesPage
                        allGames={games}
                        handlePaginatePage={handlePaginatePage}
                    />
                )}
            />
            <Route
                path={"/shop/:gameTitle"}
                render={() => <GamePage games={games} />}
            />
            <Route
                path={"/shop"}
                render={() => (
                    <Shop
                        games={gamesList}
                        allGames={games}
                        handlePaginatePage={handlePaginatePage}
                    />
                )}
            />
            <Route
                path={"/login/:type?"}
                render={() => (
                    <LogIn
                        changeAuth={changeAuth}
                        addUsers={addUsers}
                        usersLength={users.length}
                    />
                )}
            />
            <Route path={"*"} render={() => <NotFound />} />
        </Switch>
    )
}

export default App
