import * as React from "react";
import MasterLayout from "../layouts/master";

export default class DefaultPage extends React.Component<any, any> {
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
