import React from "react";
import PropTypes from "prop-types";

const RadioField = ({ options, name, value, onChange, label }) => {
    return (
        <div className="mb-4">
            <label className="form-label">{label}</label>
            {options.map((option) => (
                <div className="form-check form-check-inline" key={option.name + "_" + option.value}>
                    <input className="form-check-input" type="radio" name={name} id={option.name + "_" + option.value} checked={option.value === value} value={option.value} onChange={onChange}/>
                    <label className="form-check-label" htmlFor={option.name + "_" + option.value}>{option.name}</label>
                </div>))}
        </div>
    );
};

RadioField.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
};

export default RadioField;
