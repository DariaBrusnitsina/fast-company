import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const MultySelectField = ({ options, onChange }) => {
    const optionsArray = !Array.isArray(options) && typeof (options) === "object"
        ? Object.keys(options).map(optionName => ({ label: options[optionName].name, value: options[optionName]._id }))
        : options;
    return (
        <Select
            isMulti
            options={optionsArray}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={onChange}
        />

    );
};

MultySelectField.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
};

export default MultySelectField;
