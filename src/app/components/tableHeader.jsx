import React, { useState } from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const [pic, setPic] = useState("");
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort(({ ...selectedSort, order: selectedSort.order === "asc" ? "desc" : "asc" }));
            setPic(selectedSort.order === "asc" ? <i className="bi bi-caret-down-fill"></i> : <i className="bi bi-caret-up-fill"></i>);
        } else {
            onSort({ path: item, order: "asc" });
        }
    };

    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => (
                    <th
                        key={ column }
                        onClick={
                            columns[column].path ? () => handleSort(columns[column].path) : undefined
                        }
                        {...{ role: columns[column].path && "button" }}
                        scope="col">
                        { columns[column].name } {selectedSort.path === columns[column].path ? pic : ""}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

TableHeader.propTypes = {
    users: PropTypes.array.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired
};

export default TableHeader;
