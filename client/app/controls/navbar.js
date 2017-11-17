import * as React from "react";
import * as ReactRouterDOM from "react-router-dom";
const Navbar = () => {
    return (React.createElement("div", { className: "container" },
        React.createElement("div", { className: "row" },
            React.createElement("ul", { className: "nav nav-pills" },
                React.createElement("li", null,
                    React.createElement(ReactRouterDOM.Link, { to: "/" }, "Index")),
                React.createElement("li", null,
                    React.createElement(ReactRouterDOM.Link, { to: "/home" }, "Home")),
                React.createElement("li", null,
                    React.createElement(ReactRouterDOM.Link, { to: "/about" }, "About")),
                React.createElement("li", null,
                    React.createElement(ReactRouterDOM.Link, { to: "/hz" }, "hz")),
                React.createElement("li", null,
                    React.createElement(ReactRouterDOM.Link, { to: "/admin" }, "admin"))))));
};
export default Navbar;
//# sourceMappingURL=navbar.js.map