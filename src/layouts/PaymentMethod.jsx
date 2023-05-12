import React, { useState } from "react"
import PropTypes from "prop-types"

import LayoutWithoutHeader from "../components/LayoutWithoutHeader"
import TextField from "../components/TextField"
import CancelButton from "../components/CancelButton"
import { useLocation } from "react-router-dom"

const PaymentMethod = () => {
    const location = useLocation()
    const title = location.state.title
    const [data, setData] = useState({
        name: "",
        cardNumber: "",
        validSince: "",
        validBefore: "",
        cvc: "",
        postalCode: ""
    })
    const [errors, setErrors] = useState({})
    const handleChange = ({ target }) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }
    const configMessage = {}
    return (
        <LayoutWithoutHeader>
            <div className="paymentMethodContainer">
                <div>
                    <div>
                        <TextField
                            name={"name"}
                            label={"Cardholder name"}
                            onChange={handleChange}
                            text={data.name}
                            error={errors.name}
                        />
                    </div>
                    <div className="cardInfo">
                        <TextField
                            name={"cardNumber"}
                            label={"Card number"}
                            onChange={handleChange}
                            text={data.cardNumber}
                            error={errors.cardNumber}
                        />
                    </div>
                    <div>
                        <TextField
                            name={"valid"}
                            label={"Expiry date"}
                            onChange={handleChange}
                            text={data.validSince}
                            error={errors.cardNumber}
                        />
                        <TextField
                            name={"cvc"}
                            label={"Security code"}
                            onChange={handleChange}
                            text={data.cvc}
                            error={errors.cvc}
                        />
                    </div>
                    <div>
                        <TextField
                            name={"postalCode"}
                            label={"Postal code"}
                            onChange={handleChange}
                            text={data.postalCode}
                            error={errors.postalCode}
                        />
                    </div>
                </div>
                <div>
                    <CancelButton path={`/shop/${title}/buyPage`} />
                </div>
            </div>
        </LayoutWithoutHeader>
    )
}

export default PaymentMethod
