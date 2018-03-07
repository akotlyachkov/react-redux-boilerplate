import React from "react";
import AlterLayout from "../layouts/alter";
import TodoStore from '../flux/store';
import {Container} from "flux/utils";
import Actions from "../flux/actions"
class AboutPage extends React.Component {
    static getStores() {
        return [TodoStore];
    }

    static calculateState(prevState) {
        return TodoStore.getState();
    }

    saveLogin(e) {
        e.preventDefault();
        Actions.changeName(this.login.value)
    }

    render() {
        return (
            <AlterLayout {...this.state}>
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

export default Container.create(AboutPage);
