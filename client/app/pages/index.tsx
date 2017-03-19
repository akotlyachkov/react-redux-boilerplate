import React, {Component} from "react";

import Navbar from "../controls/navbar";

export default class IndexPage extends Component<any, any> {
    render() {
        return (

            <div className="container">
                <Navbar/>
                <h2>Idex</h2>
                <h3>Page not found</h3>
            </div>);
    }
}
