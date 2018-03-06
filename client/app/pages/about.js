import React from "react";
import AlterLayout from "../layouts/alter";

export default class AboutPage extends React.Component {
    constructor(props) {
        super()
    }

    saveLogin(e) {
        e.preventDefault();
        console.log(this.login.value);
        window.localStorage.setItem('user', this.login.value);
    }

    render() {
        return (
            <AlterLayout>
                <div className="row">
                    <h2>About</h2>
                    <p>
                        This project includes a working example of React, React Router, and TypeScript.
                        It is <a href="https://github.com/toddlucas/react-tsx-starter">hosted on Github</a>.
                    </p>
                    <input placeholder="login" type="text" ref={login => {
                        this.login = login;
                    }}/>
                    <button onClick={e => this.saveLogin(e)}>Войти</button>
                </div>
            </AlterLayout>
        );
    }
}

