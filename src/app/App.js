import React, { useState } from 'react';
import Users from './components/users';
import api from './api';
import SearchStatus from './components/searchStatus';


const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const handleToggleBookMark = (userId) => {

        const newStatus = users.map((user) => {
            if (user._id === userId) {
                user.bookmark === true ? user.bookmark = false : user.bookmark = true;;
            }

            return user
        })
        setUsers(newStatus)
    };

    return (
        <>
        <SearchStatus length={users.length}/>
        <Users 
            users={users}
            onDelete={handleDelete}
            onBookMark={handleToggleBookMark}
        />
        </>
    )
}

export default App