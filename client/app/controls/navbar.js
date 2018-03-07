import  React from "react";
import {Link} from "react-router-dom";

const  Navbar = (props)=> {
    return (
        <div className="container">
            <div className="row">
                {props.name}
            </div>
            <div className="row">
                <ul className="nav nav-pills">
                    <li><Link to="/">Index</Link></li>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/hz">hz</Link></li>
                    <li><Link to="/admin">admin</Link></li>
                </ul>
            </div>
        </div>
    )
};

export default  Navbar