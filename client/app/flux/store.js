import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './types';
import TodoDispatcher from './dispatcher';

class TodoStore extends ReduceStore {

    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return {
            name:'вася'
        };
    }

    reduce(state, action) {
        switch (action.type) {
            case TodoActionTypes.ADD_TODO:
                console.log('ADD_TODO');
                return state;
            case TodoActionTypes.ChangeName:
                console.log(action);
                state.name = action.name;
                return state;
            default:
                return state;
        }
    }
}

export default new TodoStore();