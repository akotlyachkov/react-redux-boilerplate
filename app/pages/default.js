import React, {Component} from "react";
import {Container} from 'flux/utils';
import {store} from '../stores/store';
import {actions} from '../actions/actions';
import {Progress} from '../controls/progress'
import {Clock} from "../controls/clock";

class Default extends Component {
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

  componentDidMount() {
    actions.loadTestData()
  }

  render() {
    let {progress,status=''} = this.state.base;
    return (
      <div>
        <h2>Index <Progress progress={progress}/></h2>
        <div>
          test: {status}
        </div>
        <Clock />
      </div>
    );
  }
}

let DefaultPage = Container.create(Default);
export {DefaultPage}
