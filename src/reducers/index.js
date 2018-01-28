import { combineReducers } from 'redux';
import { List, Map } from 'immutable';
import {
    GET_REPO,
    GET_TABLE_OF_CONTENTS,
} from '../actions';

const initialState = Map({
    repos: List(),
    tableOfContents: ''
})

function repos(state = initialState, action) {
    switch (action.type) {
        case GET_REPO:
            return state.update('repos', repos => repos.push(action.repoName))
        case GET_TABLE_OF_CONTENTS:
            return state.set('tableOfContents', action.content)
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    dashboard: repos,
});

export default rootReducer;