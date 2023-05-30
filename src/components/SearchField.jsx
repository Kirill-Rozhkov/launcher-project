import React, { useState } from "react"
import PropTypes from "prop-types"

const SearchFiled = ({ label, onChange, value, name }) => {
    const isLogin = () => {
        if (
            label.toLowerCase() !== "password" &&
            label.toLowerCase() !== "email" &&
            label.toLowerCase() !== "name"
        ) {
            return <h1>{label}</h1>
        } else {
            return <div>{label}</div>
        }
    }
    return (
        <>
            <label htmlFor={name}>{isLogin()}</label>
            <input
                value={value}
                name={name}
                id={name}
                onChange={onChange}
                type="text"
                placeholder="Search..."
            />
        </>
    )
}
SearchFiled.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    name: PropTypes.string
}

export default SearchFiled
