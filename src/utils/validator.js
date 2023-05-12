export function validator(data, config) {
    const errors = {}
    function validate(validateMethod, data, config) {
        switch (validateMethod) {
            case "isNotEnglish": {
                const isNotEnglishRegEx = /[a-zA-Z]/g
                const numberTexEx = /\d/
                const symbolRegEx = /[!@#$%^&*()_+=[\]{};':"\\|,.<>/?]/
                for (let i = 0; i < data.length; i++) {
                    console.log(data[i])
                    if (
                        !isNotEnglishRegEx.test(data[i]) &&
                        !numberTexEx.test(data) &&
                        !symbolRegEx.test(data)
                    ) {
                        console.log("error")
                        return config.message
                    }
                }
                break
            }
            case "isRequired":
                if (data.trim() === "") return config.message
                break
            case "isEmail": {
                const emailRegEx = /^\S+@\S+\.\S+$/g
                if (!emailRegEx.test(data)) return config.message
                break
            }
            case "isCapital": {
                const capitalRegEx = /[A-Z]/
                if (!capitalRegEx.test(data)) return config.message
                break
            }
            case "isSpecialSymbol": {
                const symbolRegEx = /[!@#$%^&*()_+=[\]{};':"\\|,.<>/?]/
                if (!symbolRegEx.test(data)) return config.message
                break
            }
            case "isNumber": {
                const numberTexEx = /\d/
                if (!numberTexEx.test(data)) return config.message
                break
            }
            case "isShort":
                if (data.length < 8) return config.message
                break
            default:
                break
        }
    }
    for (const filedName in data) {
        for (const validateMethod in config[filedName]) {
            const error = validate(
                validateMethod,
                data[filedName],
                config[filedName][validateMethod]
            )
            if (error) {
                errors[filedName] = error
            }
        }
    }
    return errors
}
