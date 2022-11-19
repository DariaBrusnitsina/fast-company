import React from "react";

const BookMark = ({onBookMark, status, id}) => {

    return (
        <>
            <button className="btn btn-light" onClick={() => onBookMark(id)} >
                {status === true ? <i className="bi bi-bookmark-fill"></i> : <i className="bi bi-bookmark"></i>}
            </button>
        </>
    )
}

export default BookMark