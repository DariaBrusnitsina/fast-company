import React, {useState} from "react";
import api from "../api"

const Users = () => {
    const [users, serUsers] = useState(api.users.fetchAll())

    let length = users.length

    const badgeContent = () => {
        let message = length === 2 || length === 3 || length === 4 ? " человека тусанут с тобой сегодня" : " человек тусанет с тобой сегодня"
        return length === 0 ? "Никто с тобой не тусанет" : `${length} ${message}`
    }

    const getBageClasses = () => {
        let classes = "badge m-2 "
        classes += length === 0 ? "bg-danger" : "bg-primary"
        return classes
    }

    const handleUserRemove = (id) => {
        serUsers(prevState => prevState.filter(user => user!== id))
    }

    const getQualities = (qualities) => {
        return qualities.map((quality) => ( 
            <span className={"badge m-2 bg-" + quality.color}>{quality.name}</span>
        ))
    }

    const renderRows = () => {
        return length !== 0
            ? <table className="table table-hover m-2">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Профессия</th>
                        <th scope="col">Встречи</th>
                        <th scope="col">Оценка</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                
                {users.map((user) => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{getQualities(user.qualities)}</td>
                    <td>{user.profession.name}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{user.rate} / 5</td>
                    <td>
                        <button className="btn btn-danger" onClick = {() => handleUserRemove(user)}>delete</button>
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
        : ""
    }

    return (
        <>
            <h3><span className ={getBageClasses()}>{badgeContent()}</span></h3>

            {renderRows()}
        </>
    )
}

export default Users