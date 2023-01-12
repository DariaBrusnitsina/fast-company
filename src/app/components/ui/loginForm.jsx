import React, { useState, useEffect } from "react";
import CheckBoxField from "../common/form/checkBoxField";
import TextField from "../common/form/textField";
import { validator } from "../utils/validator";

const LoginForm = () => {
    const [data, setData] = useState({ email: "", password: "", stayOn: false });
    const [errors, setErrors] = useState({ });

    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        console.log(data);
    };
    const validatorConfing = {
        email: { isRequired: { message: "Please enter email address" }, isEmail: { message: "Email address is invalid" } },
        password: {
            isRequired: { message: "Please enter password" },
            isCapitalSymbol: { message: "Password must contains a minimum of 1 upper case letter" },
            isContainDigit: { message: "Password must contains a minimum of 1 numeric character" },
            min: { message: "Password must be at least 8 characters long", value: 8 }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfing);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    return (

        <form onSubmit={handleSubmit}>
            <TextField label="Email" name="email" value={data.email} onChange={handleChange} error={errors.email}/>
            <TextField label="Password" type="password" name="password" value={data.password} onChange={handleChange} error={errors.password}/>
            <CheckBoxField value={data.stayOn} onChange={handleChange} name="stayOn">Оставаться в системе</CheckBoxField>
            <button className="btn btn-primary w-100 mx-auto" type="submit" disabled={!isValid}>Submit</button>
        </form>

    );
};

export default LoginForm;
