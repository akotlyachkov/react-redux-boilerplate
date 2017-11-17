import * as React from "react";
import * as ReactRouterDOM from "react-router-dom";

class RestrictRoute extends ReactRouterDOM.Route<any> {

    componentWillMount() {
        const login = window.localStorage.getItem('user');
        console.log(this.props.history);
        if (login == 'admin')
            console.log('вошли админом');
        else {
            console.log('взломали админку');
            this.context.router.history.push(this.props.failPath)
        }
    }

    render() {
        return <ReactRouterDOM.Route ref="routa" {...this.props}/>
    }
}


export default RestrictRoute;