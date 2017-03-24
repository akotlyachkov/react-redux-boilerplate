import React, {Component} from "react";
import MasterLayout from "../layouts/master";
import {connect} from "react-redux";
import {bindActionCreators } from "redux";


class AboutPage extends Component<any, any> {
    saveLogin(e) {
        e.preventDefault();

        window.localStorage.setItem('user', this.refs.login.value);
    }

    render() {
        return (
            <MasterLayout>
                <div className="row">
                    <h2>About</h2>
                    <p>
                        This project includes a working example of React, React Router, and TypeScript.
                        It is <a href="https://github.com/toddlucas/react-tsx-starter">hosted on Github</a>.
                    </p>

                    <input placeholder="login" type="text" ref='login'/>
                    <button onClick={e => this.saveLogin(e)}>Войти</button>

                </div>
            </MasterLayout>

        );
    }
}
function mapStateToProps(state) {
    return {state}
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage)