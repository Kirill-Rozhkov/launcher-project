import React from "react"
import { useHistory } from "react-router-dom"

import LayoutWithoutHeader from "../components/LayoutWithoutHeader"

import "../css/authorization/sign.css"

const SignUp = () => {
    const history = useHistory()
    const goLogin = () => {
        history.push("/login")
    }
    const goBack = () => {
        history.push("/")
    }
    return (
        <LayoutWithoutHeader>
            <div className="signContainer">
                <div className="LogHeader">
                    <h1>Sign up</h1>
                </div>
                <div className="signBody">
                    <h4>
                        {`If you have an accaunt, them`}
                        <button onClick={goLogin} className="signup">
                            <h3>Log in</h3>
                        </button>
                    </h4>
                </div>
                <button onClick={goBack}>Cancel</button>
            </div>
        </LayoutWithoutHeader>
    )
}
SignUp.propTypes = {}

export default SignUp
