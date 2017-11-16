import React from "react";
import Navbar from "controls/Navbar";
import Jumbotron from "controls/Jumbotron";


export default function MasterLayout(props) {
    return (
        <div>
            <Navbar/>
            <Jumbotron/>
            <div className="container">
                {...props.children}
            </div>
        </div>
    );
}

