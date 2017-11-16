import React, {Component} from "react";
import MasterLayout from "../layouts/master";

export default class AdminPage extends Component<any, any> {
    componentDidMount() {
        console.log("Вошли в админку")

    }
    render() {

        return (
                <MasterLayout>
                    <div className="row">
                        <h2>Admin</h2>
                    </div>
                </MasterLayout>
        );
    }
};


