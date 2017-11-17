import * as React from "react";
import * as ReactRouterDOM from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container">
            <div className="row">
                <ul className="nav nav-pills">
                    <li><ReactRouterDOM.Link to="/">Index</ReactRouterDOM.Link></li>
                    <li><ReactRouterDOM.Link to="/home">Home</ReactRouterDOM.Link></li>
                    <li><ReactRouterDOM.Link to="/about">About</ReactRouterDOM.Link></li>
                    <li><ReactRouterDOM.Link to="/hz">hz</ReactRouterDOM.Link></li>
                    <li><ReactRouterDOM.Link to="/admin">admin</ReactRouterDOM.Link></li>
                </ul>
            </div>
        </div>
    )
};

export default Navbar;