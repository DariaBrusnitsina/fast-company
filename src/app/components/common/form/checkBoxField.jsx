import React from "react";
import PropTypes from "prop-types";

const CheckBoxField = ({ name, value, onChange, children, error }) => {
    const handleChange = ({ target }) => {
        onChange({ name, value: !value });
    };
    const getInputClasses = () => {
        return "form-check-label" + (error ? " is-invalid" : "");
    };
    return (
        <div className="mb-4">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id={name} onChange={handleChange} checked={value}/>
                <label className={getInputClasses()} htmlFor="flexCheckDisabled">
                    {children}
                </label>
                {error && <div className="invalid-feedback">
                    {error}
                </div>}
            </div>
        </div>
    );
};

CheckBoxField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default CheckBoxField;
