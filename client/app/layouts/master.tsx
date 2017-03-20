import React, {Component} from "react";
import Navbar from "../controls/navbar";
import Jumbotron from "../controls/jumbotron";


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
