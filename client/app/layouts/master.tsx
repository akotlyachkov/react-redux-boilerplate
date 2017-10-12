import React, {Component} from "react";
import Navbar from "../controls/Navbar";
import Jumbotron from "../controls/Jumbotron";


export default class MasterLayout extends Component<any, any> {

    render() {
        return (
            <div>
                <Navbar/>
                <Jumbotron/>
                <div className="container">
                    {...this.props.children}
                </div>
            </div>
        );
    }
}
