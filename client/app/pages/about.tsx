import * as React from "react";
import MasterLayout from "../layouts/master";

export default class AboutPage extends React.Component<any, any> {

    private login: HTMLInputElement;

    saveLogin(e) {
        e.preventDefault();
        console.log(this.login.value);
        window.localStorage.setItem('user', this.login.value);
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
                    <input placeholder="login" type="text"  ref={login => { this.login = login; }}/>
                    <button onClick={e => this.saveLogin(e)}>Войти</button>
                </div>
            </MasterLayout>
        );
    }
}

