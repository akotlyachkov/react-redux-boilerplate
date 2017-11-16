import React, { Component } from "react";
import MasterLayout from "../layouts/master";
const getConfirmation = (message, callback) => {
    const allowTransition = window.confirm(message);
    callback(allowTransition);
};
export default class HomePage extends Component {
    componentDidMount() {
        this.props.router.setRouteLeaveHook(this.props.route, getConfirmation);
        console.log(1);
    }
    componentWillMount() {
    }
    render() {
        return (React.createElement(MasterLayout, null,
            React.createElement("div", { className: "row" },
                React.createElement("h2", null, "HomeView"))));
    }
}
;
//# sourceMappingURL=Home.js.map