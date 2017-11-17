import * as React from "react";
import {Jumbotron, Navbar} from "../controls";


const MasterLayout = (props) => {
    return (
        <div>
            <Navbar/>
            <Jumbotron/>
            <div className="container">
                {...props.children}
            </div>
        </div>
    );
};

export default MasterLayout;

