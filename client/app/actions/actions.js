import actionTypes from './types';
import axios from 'axios';

export const ChangeName = name => ({
    type: actionTypes.ChangeName,
    payload: {name}
});

export const LoadDataStart = () => ({
    type: actionTypes.LoadDataStart,
    payload: {progress: true}
});

export const LoadDataSuccess = data => ({
    type: actionTypes.LoadDataSuccess,
    payload: {...data, progress: false}
});

export const LoadDataError = err => ({
    type: actionTypes.LoadDataError,
    payload: {err, progress: false}
});

export function loadTestData() {
    return dispatch => {
        dispatch(LoadDataStart());
        axios.post('/api/test', {data: 1})
            .then(function (response) {
                dispatch(LoadDataSuccess(response.data));
            })
            .catch(function (error) {
                dispatch(LoadDataError(error));
            });

    }
}