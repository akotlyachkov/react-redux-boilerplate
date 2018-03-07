import actionTypes from './types';
import dispatcher from './dispatcher';

const Actions = {
    addTodo(text) {
        dispatcher.dispatch({
            type: actionTypes.ADD_TODO,
            text,
        });
    },
    changeName(name){
        dispatcher.dispatch({
            type: actionTypes.ChangeName,
            name,
        });
    }
};

export default Actions;