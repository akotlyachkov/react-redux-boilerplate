import React from "react";
import MasterLayout from "../layouts/master";
import TodoStore from '../flux/store';
import {Container} from "flux/utils";

const getConfirmation = (message, callback) => {
    const allowTransition = window.confirm(message);
    callback(allowTransition)
};

class HomePage extends React.Component {

    static getStores() {
        return [TodoStore];
    }

    static calculateState(prevState) {
        return  TodoStore.getState();
    }

    componentDidMount() {
        //this.props.router.setRouteLeaveHook(this.props.route, getConfirmation);
        console.log(1)
    }

    componentWillMount() {
        //this.props.history.push('/about');
    }

    render() {

        return (
            <MasterLayout {...this.state}>
                <div className="row">
                    <h2>HomeView</h2>
                </div>
            </MasterLayout>
        );
    }
}

export default Container.create(HomePage);
