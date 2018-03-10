import actionTypes from './types';

export const changeName = name => ({
    type: actionTypes.ChangeName,
    payload: {name}
});

