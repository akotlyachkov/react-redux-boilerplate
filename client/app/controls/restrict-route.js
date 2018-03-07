import  React from "react";
import  Route from "react-router-dom";

class RestrictRoute extends Route {

    constructor(props) {
        super();
    }

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
        return <Route ref="routa" {...this.props}/>
    }
}


export default RestrictRoute;