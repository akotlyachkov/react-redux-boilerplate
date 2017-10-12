import {GET_PHOTOS_FAIL, GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS,SET_TEXT} from "../actions/types/page";

const initialState = {
    year: 2016,
    photos: [],
    progress: false,
    error: ''
};

export default function page(state = initialState, action) {

    switch (action.type) {
        case SET_TEXT:
            return {...state, year: action.payload};

        case GET_PHOTOS_REQUEST:
            return {...state, year: action.payload, progress: true, error: ''};

        case GET_PHOTOS_SUCCESS:
            return {...state, photos: action.payload, progress: false, error: ''};

        case GET_PHOTOS_FAIL:
            return {...state, error: action.payload.message, progress: false};

        default:
            return state;
    }

}
