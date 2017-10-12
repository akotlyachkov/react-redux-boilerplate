import React, {Component} from "react";
import MasterLayout from "../layouts/master";

export default class DefaultPage extends Component<any, any> {
    render() {
        return (
                <MasterLayout>
                    <div className="row">
                        <h2>Index</h2>
                        <p>Page not found</p>
                    </div>
            </MasterLayout>
        );
    }
}
