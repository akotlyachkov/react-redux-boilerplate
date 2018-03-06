import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './types';
import TodoDispatcher from './dispatcher';

class TodoStore extends ReduceStore {



    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return {};
    }

    reduce(state, action) {
        switch (action.type) {
            case TodoActionTypes.ADD_TODO:
                console.log('ADD_TODO');
                return state;

            default:
                return state;
        }
    }
}

export default new TodoStore();