/* src/States/Store/index.js */
'use strict';

import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const middleware = applyMiddleware(promise(), thunk, logger());

const reducers = combineReducers({
    comments: commentsReducer,
    posts: postsReducer,
    todos: todosReducer,
});

export const store = createStore(reducers, middleware);
