import React, { Component } from "react";
import MasterLayout from "../layouts/master";
export default class DefaultPage extends Component {
    render() {
        return (React.createElement(MasterLayout, null,
            React.createElement("div", { className: "row" },
                React.createElement("h2", null, "Index"),
                React.createElement("p", null, "Page not found"))));
    }
}
//# sourceMappingURL=Default.js.map