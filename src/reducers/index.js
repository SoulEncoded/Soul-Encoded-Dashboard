import { combineReducers } from 'redux';
import { List, Map } from 'immutable';
import {
    GET_REPO,
} from '../actions';

const initialState = Map({
    repos: List()
})

function repos(state = initialState, action) {
    switch (action.type) {
        case GET_REPO:
            return state.update('repos', repos => repos.push(action.repoName))
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    repos,
});

export default rootReducer;