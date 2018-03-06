import React from "react";
import {Jumbotron, Navbar} from "../controls";


const AlterLayout = (props) => {
    return (
        <div>
            <Navbar/>
            <Jumbotron/>
            <div className="container">
                <p>Альтернативный шаблон</p>
                {...props.children}
            </div>
        </div>
    );
};

export default AlterLayout;

