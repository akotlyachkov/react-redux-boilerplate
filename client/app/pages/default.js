import React, {Component} from "react";
import MasterLayout from "../layouts/master";
import {Container} from "flux/utils";
import TodoStore from '../flux/store';

class DefaultPage extends Component {
    static getStores() {
        return [TodoStore];
    }

    static calculateState(prevState) {
        return TodoStore.getState();
    }

    render() {
        return (
            <MasterLayout {...this.state}>
                <div className="row">
                    <h2>Index</h2>
                    <p>Стартовая страница</p>

                </div>
            </MasterLayout>
        );
    }
}

export default Container.create(DefaultPage);