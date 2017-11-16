import React, { Component } from "react";
import MasterLayout from "../layouts/master";
export default class AdminPage extends Component {
    componentDidMount() {
        console.log("Вошли в админку");
    }
    render() {
        return (React.createElement(MasterLayout, null,
            React.createElement("div", { className: "row" },
                React.createElement("h2", null, "Admin"))));
    }
}
;
//# sourceMappingURL=Admin.js.map