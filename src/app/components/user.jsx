import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../api";
import { useHistory } from "react-router-dom";

const User = ({ userId }) => {
    const [user, setUser] = useState();
    const history = useHistory();

    useEffect(() => {
        api.users.getById(userId).then((data) => setUser(data));
    }, []);

    const handleToAllUsers = () => {
        history.replace("/users");
    };

    if (user) {
        return (
            <>
                <h1>{user.name}</h1>
                <h2>Профессия: {user.profession.name}</h2>
                <p>{user.qualities.map((item) => (
                    <span className={"badge m-1 bg-" + item.color} key={item._id}>{item.name}</span>
                ))}</p>
                <p>Проведенных встреч: {user.completedMeetings}</p>
                <h3>Рейтинг: {user.rate}</h3>
                <button className="btn btn-primary" onClick={() => { handleToAllUsers(); }}>Все Пользователи</button>

            </>
        );
    }
    return <h1>Loading...</h1>;
};

User.propTypes = {
    userId: PropTypes.string.isRequired
};

export default User;
