import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

import { validator } from "../utils/validator"

import LayoutWithoutHeader from "../components/LayoutWithoutHeader"

import TextField from "../components/TextField"
import CancelButton from "../components/CancelButton"

import "../css/authorization/sign.css"

const LogIn = () => {
    const [data, setData] = useState({ email: "", password: "" })
    const [errors, setErrors] = useState({})
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }
    const validatorConfig = {
        email: {
            isEmail: {
                message: "Email is incorrect"
            },
            notLatin: {
                message: "Email must have only latin leeters"
            },
            isRequired: {
                message: "Email is required"
            }
        },
        password: {
            isShort: {
                message: "Password must be at least 8 symbols"
            },
            isCapital: {
                message: "Password must contain at least one capital letter"
            },
            isNumber: {
                message: "Password must contain at least one number"
            },
            isSpecialSymbol: {
                message: "Password must contain at least one special symbol"
            },
            isNotEnglish: {
                message: "Password must have only English leeters"
            },
            isRequired: {
                message: "Password is required"
            }
        }
    }
    useEffect(() => {
        setErrors(validator(data, validatorConfig))
    }, [data])

    const history = useHistory()
    const goSingup = () => {
        history.push("/signup")
    }
    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        console.log(data)
    }

    return (
        <LayoutWithoutHeader>
            <div className="signContainer">
                <div className="LogHeader">
                    <h1>Log in</h1>
                </div>
                <div className="signBody">
                    <form action="">
                        <TextField
                            name={"email"}
                            label={"Email"}
                            onChange={handleChange}
                            text={data.email}
                            error={errors.email}
                        />
                        <TextField
                            name={"password"}
                            label={"Password"}
                            type={"password"}
                            onChange={handleChange}
                            text={data.password}
                            error={errors.password}
                        />
                        <div onClick={handleSubmit} disabled={!isValid}>
                            <button>
                                <h3>Sumbit</h3>
                            </button>
                        </div>
                    </form>
                    <h4>
                        {`If you don't have an accaunt, them`}
                        <button onClick={goSingup} className="signup">
                            <h3>Sing up</h3>
                        </button>
                    </h4>
                </div>
                <CancelButton path={"/"} />
            </div>
        </LayoutWithoutHeader>
    )
}
LogIn.propTypes = {}

export default LogIn
