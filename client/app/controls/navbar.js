import * as React from "react";
import Link from "react-router-dom";
const Navbar = () => {
    return (React.createElement("div", { className: "container" },
        React.createElement("div", { className: "row" },
            React.createElement("ul", { className: "nav nav-pills" },
                React.createElement("li", null,
                    React.createElement(Link, { exact: true, activeClassName: "active", to: "/" }, "Index")),
                React.createElement("li", null,
                    React.createElement(Link, { activeClassName: "active", to: "/home" }, "Home")),
                React.createElement("li", null,
                    React.createElement(Link, { activeClassName: "active", to: "/about" }, "About")),
                React.createElement("li", null,
                    React.createElement(Link, { activeClassName: "active", to: "/hz" }, "hz")),
                React.createElement("li", null,
                    React.createElement(Link, { activeClassName: "active", to: "/admin" }, "admin"))))));
};
export default Navbar;
//# sourceMappingURL=navbar.js.map