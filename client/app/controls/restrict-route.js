import React from "react";
import Route from "react-router-dom";
class RestrictRoute extends Route {
    constructor(props) {
        super(props);
        this.props = props;
    }
    componentWillMount() {
        const login = window.localStorage.getItem('user');
        this.props.history;
        if (login == 'admin')
            console.log('вошли админом');
        else {
            console.log('взломали админку');
            this.context.router.history.push(this.props.failPath);
        }
    }
    render() {
        return React.createElement(Route, Object.assign({ ref: "routa" }, this.props));
    }
}
export default RestrictRoute;
//# sourceMappingURL=RestrictRoute.js.map