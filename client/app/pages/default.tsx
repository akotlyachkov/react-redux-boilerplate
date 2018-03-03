import * as React from "react";
import MasterLayout from "../layouts/master";
import HomePage from "./home";
import {Route, Switch} from "react-router";
import NotFoundPage from "./not-found";


export default class DefaultPage extends React.Component<any, any> {
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
