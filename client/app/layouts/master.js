import React from "react";
import {Jumbotron, Navbar} from "../controls";


export default (props) => {
    return (
        <div>
            <Navbar/>
            <Jumbotron/>
            <div className="container">
                {props.children}
            </div>
        </div>
    );
};


