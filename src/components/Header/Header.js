import React, {useState} from "react";
import "./Header.css";
import {useHistory} from "react-router-dom";

function Header(){
    const [login, setLogin] = useState(false);

    const history = useHistory()
    function handleClickDashboard() {
        history.push("/dashboard");
    }

    function handleClickHome() {
        history.push("/");
    }

return(
<div className="header-body">
    <h1 className="title">Crypto Dashboard</h1>

    <button
        type="submit"
        className="dashboard-button"
        onClick={handleClickHome}
    >Home</button>

    <button
    type="submit"
    className="dashboard-button"
    disabled={login === false}
    onClick={handleClickDashboard}
    >Create dashboard</button>

    <form action="login" className="login-field">
        <div>Username:</div>
        <input type="text" id="username" />
        <div>Password:</div>
            <input type="password" id="password" />
    </form>

    <button
    type="submit"
    className="login-button"
    onClick={() => setLogin(true)}

    >Login</button>
</div>
)
}

export default Header;