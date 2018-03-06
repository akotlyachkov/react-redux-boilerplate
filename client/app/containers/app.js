import {Container} from 'flux/utils';
import TodoStore from '../flux/store';
import AppView from '../app';

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

let  AppContainer = Container.createFunctional(AppView, getStores, getState);

export default AppContainer;