import * as React from "react";
import {NavLink} from "react-router-dom";

export default class Navbar extends React.Component<any, any> {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <ul className="nav nav-pills">
                        <li ><NavLink exact activeClassName="active" to="/">Index</NavLink></li>
                        <li><NavLink activeClassName="active" to="/home">Home</NavLink></li>
                        <li><NavLink activeClassName="active" to="/about">About</NavLink></li>
                        <li><NavLink activeClassName="active" to="/hz">hz</NavLink></li>
                        <li><NavLink activeClassName="active" to="/admin">admin</NavLink></li>
                    </ul>
                </div>
            </div>
        )
    }
}
