import React from "react";
import BookMark from "./bookmark";
import Qualitie from "./qualitie";

const User = ({
    _id,
    name,
    qualities,
    profession,
    completedMeetings,
    rate,
    onBookMark,
    bookmark,
    onDelete,
}) => {
    
    return (
        <>
            <tr key={_id}>
            <td>{name}</td>
            <td>
                {qualities.map((item) => (
                    <Qualitie color={item.color} name={item.name} id={item._id}/>
                ))}
            </td>
            <td>{profession.name}</td>
            <td>{completedMeetings}</td>
            <td>{rate} /5</td>
            <td>
                <BookMark
                onBookMark={onBookMark}
                status={bookmark}
                id={_id}
                />
            </td>
            <td>
                <button
                    onClick={() => onDelete(_id)}
                    className="btn btn-danger"
                >
                    delete
                </button>
            </td>
            </tr>
        </>
    )
}

export default User