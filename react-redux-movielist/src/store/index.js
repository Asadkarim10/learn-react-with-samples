import { combineReducers } from 'redux';
//import { reducer as movies } from './movies';
import { createStore } from 'redux'
import MovieReducer from './reducers/movie';


export const rootReducer = combineReducers({
    MovieReducer
// more reducers go here
})

export let store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );