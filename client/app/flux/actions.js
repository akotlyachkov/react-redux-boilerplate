import actionTypes from './types';
import dispatcher from './dispatcher';

const Actions = {
    addTodo(text) {
        dispatcher.dispatch({
            type: actionTypes.ADD_TODO,
            text,
        });
    },
};

export default Actions;