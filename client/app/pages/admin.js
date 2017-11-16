import * as React from "react";
import MasterLayout from "../layouts/master";
export default class AdminPage extends React.Component {
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
//# sourceMappingURL=admin.js.map