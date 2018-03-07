import React from "react";
import MasterLayout from "../layouts/master";
import TodoStore from '../flux/store';
import {Container} from "flux/utils";
class ErrorPage extends React.Component {
    static getStores() {
        return [TodoStore];
    }

    static calculateState(prevState) {
        return  TodoStore.getState();
    }

    componentDidMount() {
        console.log("Вошли в ошибку")
    }

    render() {

        return (
            <MasterLayout {...this.state}>
                <div className="row">
                    <h2>Ошибка на сервере</h2>
                </div>
            </MasterLayout>
        );
    }
}

export default Container.create(ErrorPage);
