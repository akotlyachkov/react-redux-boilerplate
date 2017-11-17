import * as React from "react";
import MasterLayout from "../layouts/master";
export default class ErrorPage extends React.Component {
    componentDidMount() {
        console.log("Вошли в ошибку");
    }
    render() {
        return (React.createElement(MasterLayout, null,
            React.createElement("div", { className: "row" },
                React.createElement("h2", null, "\u041E\u0448\u0438\u0431\u043A\u0430 \u043D\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435"))));
    }
}
;
//# sourceMappingURL=error.js.map