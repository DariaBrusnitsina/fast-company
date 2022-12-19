import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/layouts/login";
import Main from "./components/layouts/main";
import Users from "./components/layouts/users";
import NavBar from "./components/navBar";

function App() {
    return (<div>
        <NavBar/>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/login" component={Login}/>
            <Route path="/users/:userId?" component={Users}/>
        </Switch>
    </div>
    );
}

export default App;
