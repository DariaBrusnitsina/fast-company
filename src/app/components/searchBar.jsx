import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };

    return (
        <div className="mb-4">
            <form onSubmit={ handleSubmit }>
                <div className="input-group">
                    <input placeholder="Search..." className="form-control" type="text" onChange={onSearch} />
                </div>
            </form>
        </div>
    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
};

export default SearchBar;
