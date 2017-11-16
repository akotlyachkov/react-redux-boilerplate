import * as React from "react";
import Link from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container">
            <div className="row">
                <ul className="nav nav-pills">
                    <li><Link exact activeClassName="active" to="/">Index</Link></li>
                    <li><Link activeClassName="active" to="/home">Home</Link></li>
                    <li><Link activeClassName="active" to="/about">About</Link></li>
                    <li><Link activeClassName="active" to="/hz">hz</Link></li>
                    <li><Link activeClassName="active" to="/admin">admin</Link></li>
                </ul>
            </div>
        </div>
    )
};

export default Navbar;