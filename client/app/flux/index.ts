import DefaultPage from '../pages/default';
import {Container} from 'flux/utils';
import TodoStore from './store';

function getStores() {
    return [
        TodoStore,
    ];
}

function getState() {
    return {
        todos: TodoStore.getState(),
    };
}

export default Container.createFunctional(DefaultPage, getStores, getState);