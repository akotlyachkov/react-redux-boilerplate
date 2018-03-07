import React from "react";
import {Jumbotron, Navbar} from "../controls";

 const MasterLayout = (props) => {
    return (
        <div>
            <Navbar {...props}/>
            <Jumbotron/>
            <div className="container">
                {props.children}
            </div>
        </div>
    );
};

export default MasterLayout;