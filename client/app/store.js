import {ReduceStore} from 'flux/utils';
import {dispatcher} from "./dispatcher";
import {ActionTypes} from './actions/types';
const state = {
  regions: [],
  cities: [],
  banks: [],
  error: false,
  done: false,
  ready: false,
  name: 'Вася',
  serverErrors: []
};

class Store extends ReduceStore {
  constructor() {
    super(dispatcher);
  }

  getInitialState() {
    return state;
  }

  reduce(state, action) {
    let {data, type} = action;
    switch (type) {
      case ActionTypes.ChangeName:
        return {...state, name:data};
      default:
        return state;
    }
  }
}

let store = new Store();

export {store};