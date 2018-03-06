import React from "react";
import MasterLayout from "../layouts/master";

const getConfirmation = (message, callback) => {
    const allowTransition = window.confirm(message);
    callback(allowTransition)
};

export default class HomePage extends React.Component {
    constructor(props) {
        super();
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
            <MasterLayout>
                <div className="row">
                    <h2>HomeView</h2>
                </div>
            </MasterLayout>
        );
    }
};


