import React, { useState } from "react"
import PropTypes from "prop-types"

import "../css/sign.css"
import CancelButton from "../components/CancelButton"
import LayoutWithoutHeader from "../components/LayoutWithoutHeader"
import LoginForm from "../components/LoginForm"
import { useParams } from "react-router-dom"
import RegisterForm from "../components/RegesterForm"

const LogIn = ({ changeAuth, addUsers, usersLength }) => {
    const { type } = useParams()
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    )

    const toggleFormType = () => {
        setFormType((prevstate) =>
            prevstate === "register" ? "login" : "register"
        )
    }

    return (
        <LayoutWithoutHeader>
            <div className="signContainer">
                {formType === "register" ? (
                    <>
                        <h1>Register</h1>
                        <div className="signBody">
                            <RegisterForm
                                changeAuth={changeAuth}
                                addUsers={addUsers}
                                usersLength={usersLength}
                            />
                            <h4>
                                Already have accaunt?{" "}
                                <a
                                    role="button"
                                    onClick={toggleFormType}
                                    className="signButton"
                                >
                                    Log in
                                </a>
                            </h4>
                        </div>
                    </>
                ) : (
                    <>
                        <h1>Log in</h1>
                        <div className="signBody">
                            <LoginForm changeAuth={changeAuth} />
                            <h4>
                                {`Don't have an accaunt?`}{" "}
                                <a
                                    role="button"
                                    onClick={toggleFormType}
                                    className="signButton"
                                >
                                    Sign up
                                </a>
                            </h4>
                        </div>
                    </>
                )}
                <CancelButton path={"/"} />
            </div>
        </LayoutWithoutHeader>
    )
}
LogIn.propTypes = {
    changeAuth: PropTypes.func.isRequired,
    addUsers: PropTypes.func.isRequired,
    usersLength: PropTypes.number
}

export default LogIn
