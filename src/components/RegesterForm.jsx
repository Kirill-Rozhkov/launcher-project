import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import * as yup from "yup"

import TextField from "../components/TextField"

import "../css/sign.css"
// import CheckboxField from "./CheckboxField"
import { useHistory } from "react-router-dom"

const RegisterForm = ({ changeAuth, addUsers, usersLength }) => {
    const [data, setData] = useState({ name: "", email: "", password: "" })
    const [errors, setErrors] = useState({})
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }
    const history = useHistory()
    const schemeValidate = yup.object({
        password: yup
            .string()
            .required("Password is required")
            .matches(
                /(?=.*[A-Z])/,
                "Password must contain at least one capital letter"
            )
            .matches(/(?=.*(\d))/, "Password must contain at least one number")
            .matches(
                /(?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>/?])/,
                "Password must contain at least one special symbol"
            )
            .min(8, "Password must be at least 8 symbols"),
        email: yup
            .string()
            .required("Email is required")
            .email("Email is incorrect"),
        name: yup.string().required("Name is required")
    })

    useEffect(() => {
        validate()
    }, [data])

    const validate = () => {
        schemeValidate
            .validate(data)
            .then(() => setErrors({}))
            .catch((err) => setErrors({ [err.path]: err.message }))
        return Object.keys(errors).length === 0
    }

    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) {
            return console.log(data)
        } else {
            changeAuth()
            addUsers({
                id: usersLength + 1,
                ...data,
                games: []
            })
            history.push("/")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                name={"name"}
                label={"Name"}
                onChange={handleChange}
                text={data.name}
                error={errors.name}
            />
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
            {/* <CheckboxField label={`Accept user agreement`} /> */}
            <div>
                <button type="submit" disabled={!isValid}>
                    <h3>Sumbit</h3>
                </button>
            </div>
        </form>
    )
}
RegisterForm.propTypes = {
    changeAuth: PropTypes.func,
    addUsers: PropTypes.func,
    usersLength: PropTypes.number
}

export default RegisterForm
