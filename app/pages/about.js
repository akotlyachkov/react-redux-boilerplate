import React from "react";
import {Container} from 'flux/utils';
import {store} from '../stores/store';
import {actions} from '../actions/actions';
import {Testik} from "../controls/testik";

class About extends React.Component {
  static getStores() {
    return [
      store
    ]
  }

  static calculateState(prevState) {
    return {
      base: store.getState()
    }
  }

  handleName(event) {
    actions.changeName(event.target.value)
  }

  render() {
    let {name} = this.state.base;
    return (
      <div>
        <h2>About</h2>
        <div>
          <label htmlFor="введите текст:"/>
          <input className="form-control mb-10" type="text" name="name" value={name} onChange={this.handleName}/>
          <div>Введенный текст: "<Testik text={name}/>"</div>
        </div>
      </div>
    );
  }
}

let AboutPage = Container.create(About);
export {AboutPage}