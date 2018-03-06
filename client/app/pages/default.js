import React from "react";
import MasterLayout from "../layouts/master";


export default class DefaultPage extends React.Component {
    constructor(props){
        super()
    }
    render() {
        return (
            <MasterLayout>
                <div className="row">
                    <h2>Index</h2>
                    <p>Стартовая страница</p>

                </div>
            </MasterLayout>
        );
    }
}
