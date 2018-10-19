import {ReduceStore} from 'flux/utils';
import {dispatcher} from "./dispatcher";
import {ActionTypes} from './actions/types';
const state = {
  regions: [],
  cities: [],
  banks: [],
  progress: false,
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
      case ActionTypes.LoadDataStart:
      case ActionTypes.LoadDataSuccess:
      case ActionTypes.LoadDataError:
        return {...state, ...data};
      default:
        return state;
    }
  }
}

let store = new Store();

export {store};