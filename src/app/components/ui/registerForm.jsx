import React, { useState, useEffect } from "react";
import TextField from "../common/form/textField";
import { validator } from "../utils/validator";
import api from "../../api";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MultySelectField from "../common/form/multySelectField";
import CheckBoxField from "../common/form/checkBoxField";

const RegisterForm = () => {
    const [professions, setProfession] = useState();
    const [qualities, setQualities] = useState();

    const [data, setData] = useState({ email: "", password: "", profession: "", sex: "male", qualities: [], licence: false });
    const [errors, setErrors] = useState({ });

    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
        api.qualities.fetchAll().then((data) => setQualities(data));
    }, []);

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
        },
        profession: {
            isRequired: { message: "Please choose profession" }
        },
        licence: {
            isRequired: { message: "Пожалуйста, примите соглашение" }
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
            <SelectField name="profession" defaultOption="Choose..." label="Выберите вашу профессию" options={professions} value={data.profession} onChange={handleChange} error={errors.profession}/>
            <RadioField label="Выберите ваш пол" name="sex" onChange={handleChange} value={data.sex} options={[{ name: "Male", value: "male" }, { name: "Female", value: "female" }, { name: "Other", value: "other" }]}/>
            <MultySelectField defaultValue={data.qualities} label="Выберите ваши качества" name="qualities" options={qualities} onChange={handleChange}/>
            <CheckBoxField error={errors.licence} value={data.licence} onChange={handleChange} name="licence">Подтвердить лецензионное соглашение</CheckBoxField>
            <button className="btn btn-primary w-100 mx-auto" type="submit" disabled={!isValid}>Submit</button>
        </form>
    );
};

export default RegisterForm;
