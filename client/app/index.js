"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_helmet_1 = require("react-helmet");
class Index extends React.Component {
    render() {
        const helmet = react_helmet_1.Helmet.rewind();
        return (React.createElement("html", { lang: "en-us" },
            React.createElement("head", null,
                React.createElement("meta", { charSet: "utf-8" }),
                React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
                helmet.title.toComponent(),
                helmet.meta.toComponent(),
                React.createElement("link", { rel: "shortcut icon", href: "/favicon/favicon.ico" }),
                React.createElement("link", { href: `/build/app.css`, rel: "stylesheet" })),
            React.createElement("body", null,
                "1 ",
                this.props.children,
                React.createElement("script", { src: `/build/app.js` }))));
    }
}
exports.default = Index;
//# sourceMappingURL=index.js.map