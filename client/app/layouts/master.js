import React from "react";
import Navbar from "controls/Navbar";
import Jumbotron from "controls/Jumbotron";
const MasterLayout = (props) => {
    return (React.createElement("div", null,
        React.createElement(Navbar, null),
        React.createElement(Jumbotron, null),
        React.createElement("div", { className: "container" }, props.children)));
};
export default MasterLayout;
//# sourceMappingURL=master.js.map