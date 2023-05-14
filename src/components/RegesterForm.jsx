import React, { useEffect, useState } from "react"

import { validator } from "../utils/validator"

import TextField from "../components/TextField"

import "../css/sign.css"

const RegisterForm = () => {
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
        <form onSubmit={handleSubmit}>
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
            <div>
                <button type="submit" disabled={!isValid}>
                    <h3>Sumbit</h3>
                </button>
            </div>
        </form>
    )
}

export default RegisterForm
