import React from "react";
import {Container} from 'flux/utils';
import {store} from '../store';
import {actions} from '../actions/actions';
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
    let {name}=this.state.base;
    return (
      <div>
        <h2>About</h2>
        <p>{name}</p>
        <input type="text" name="name"
               value={name}
               onChange={this.handleName}/>
      </div>
    );
  }
}
let AboutPage = Container.create(About);
export {AboutPage}