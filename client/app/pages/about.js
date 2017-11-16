import * as React from "react";
import MasterLayout from "../layouts/master";
import { connect } from "react-redux";
class AboutPage extends React.Component {
    saveLogin(e) {
        e.preventDefault();
        console.log(this.login.value);
        window.localStorage.setItem('user', this.login.value);
    }
    render() {
        return (React.createElement(MasterLayout, null,
            React.createElement("div", { className: "row" },
                React.createElement("h2", null, "About"),
                React.createElement("p", null,
                    "This project includes a working example of React, React Router, and TypeScript. It is ",
                    React.createElement("a", { href: "https://github.com/toddlucas/react-tsx-starter" }, "hosted on Github"),
                    "."),
                React.createElement("input", { placeholder: "login", type: "text", ref: login => { this.login = login; } }),
                React.createElement("button", { onClick: e => this.saveLogin(e) }, "\u0412\u043E\u0439\u0442\u0438"))));
    }
}
export default connect()(AboutPage);
//# sourceMappingURL=about.js.map