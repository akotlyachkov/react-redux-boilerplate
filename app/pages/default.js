import React, {Component} from "react";
import {Container} from 'flux/utils';
import {store} from '../stores/store';
import {actions} from '../actions/actions';
import {Progress} from '../controls/progress'

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
    let {progress,test} = this.state.base;
    return (
      <div>
        <h2>Index</h2>
        <Progress progress={progress}/>
        <div>
          test: {test && test.toString()}
        </div>
      </div>
    );
  }
}

let DefaultPage = Container.create(Default);
export {DefaultPage}
