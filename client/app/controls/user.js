import React, { Component } from "react";
export default class User extends Component {
    render() {
        const { name, error } = this.props;
        let template;
        if (name) {
            template = React.createElement("p", null,
                "\u041F\u0440\u0438\u0432\u0435\u0442, ",
                name,
                "!");
        }
        else {
            template = React.createElement("button", { className: 'btn', onClick: this.props.handleLogin }, "\u0412\u043E\u0439\u0442\u0438");
        }
        return (React.createElement("div", { className: 'ib user' },
            template,
            error ? React.createElement("p", { className: 'error' },
                " ",
                error,
                ". ",
                React.createElement("br", null),
                " \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437.") : ''));
    }
}
//# sourceMappingURL=User.js.map