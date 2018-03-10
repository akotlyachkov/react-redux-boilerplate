import actionTypes from '../actions/types';

const initialState = {
    name: 'Вася'
};

function defaultReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ChangeName:
            return Object.assign({}, state,
                {
                    name: action.payload
                });
        default:
            return state
    }
}

export default  defaultReducer