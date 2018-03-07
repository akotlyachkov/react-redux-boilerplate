import React from "react";
import MasterLayout from "../layouts/master";
import TodoStore from '../flux/store';
import {Container} from "flux/utils";

class NotFoundPage extends React.Component {
    static getStores() {
        return [TodoStore];
    }
    static calculateState(prevState) {
        return  TodoStore.getState();
    }
    render() {

        return (
            <MasterLayout  {...this.state}>
                <div className="row">
                    <h2>404</h2>
                    <p>Ничё не найдено</p>
                </div>
            </MasterLayout>
        );
    }
}


export default Container.create(NotFoundPage);