import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (<ul className="nav">
        <li className="nav-link"><Link to="/">Main</Link></li>
        <li className="nav-link"><Link to="/login">Login</Link></li>
        <li className="nav-link"><Link to="/users">Users</Link></li>
    </ul>);
};

export default NavBar;
