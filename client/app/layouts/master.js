import React from "react";
import Navbar from "controls/Navbar";
import Jumbotron from "controls/Jumbotron";
export default function MasterLayout(props) {
    return (React.createElement("div", null,
        React.createElement(Navbar, null),
        React.createElement(Jumbotron, null),
        React.createElement("div", { className: "container" }, props.children)));
}
//# sourceMappingURL=master.js.map