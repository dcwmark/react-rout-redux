/* src/States/Store/index.js */

import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import commentsReducer from '../Reducers/comments';

const middleware = applyMiddleware(promise, thunk, logger);

const reducers = combineReducers({
    comments: commentsReducer
    // posts: postsReducer,
    // todos: todosReducer,
});

const store = createStore(reducers, middleware);

export default store;
