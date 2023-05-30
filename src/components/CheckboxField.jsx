import React from "react"
import PropTypes from "prop-types"

const CheckboxField = ({ label, onChange, value, name }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                type="checkbox"
                name={name}
                id={name}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}
CheckboxField.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    name: PropTypes.string
}

export default CheckboxField
