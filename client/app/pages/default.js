import * as React from "react";
import MasterLayout from "../layouts/master";
export default class DefaultPage extends React.Component {
    render() {
        return (React.createElement(MasterLayout, null,
            React.createElement("div", { className: "row" },
                React.createElement("h2", null, "Index"),
                React.createElement("p", null, "Page not found"))));
    }
}
//# sourceMappingURL=default.js.map