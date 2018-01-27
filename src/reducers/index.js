import { combineReducers } from 'redux';

import {
    GET_REPO,
} from '../actions';

const initialState = {
    isLoading: true,
    repos: []
}

function repos(state = initialState, action) {
    switch (action.type) {
        case GET_REPO:
            return action.repoName;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    repos,
});

export default rootReducer;