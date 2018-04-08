1. npx create-react-app react-rout-redux
1. cd react-rout-redux/
1. npm install --save react-router-dom
1. npm install --save react-bootsrap
1. npm install --save react-redux
1. npm install --save redux
1. npm install --save redux-logger
1. npm install --save redux-promise-middleware
1. npm install --save redux-thunk
1. npm install --save axios

## React Router v4

/src/index.js
```javascript
. . .
import { BrowserRouter } from "react-router-dom"
. . .
ReactDOM.render(
    <BrowserRouter>
. . .
            <App />
. . .
    </BrowserRouter>
```

/src/App.js
```javascript
. . .
import { Link, Route } from "react-router-dom";
. . .
            <li><Link to="/">Homes</Link></li>
            <li><Link to="/comments">Comments</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/todos">Todos</Link></li>
. . .
        <Route exact={ true } path="/" component={ Home }/>
        <Route path="/comments" component={ Comments }/>
        <Route path="/posts" component={ Posts }/>
        <Route path="/todos" component={ Todos }/>
. . .
```

## React Redux

/src/index.js
```javascript
. . .
import { Provider } from "react-redux"

import store from "./States/Store"
. . .
ReactDOM.render(
. . .
        <Provider store={ store }>
. . .
        </Provider>
. . .
```

/src/States/Store/index.js
```javascript
import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

const middleware = applyMiddleware(promise, thunk, logger;

const reducers = combineReducers({
. . .
export const store = createStore(reducers, middleware);
```

## The Promise Way

/src/Components/Comments/index.js
```javascript
import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchComments } from '../../States/Actions/comments';

class Comments extends Component {

    componentWillMount = () => {
        this.props.fetchComments();
    }

. . .

                <ul className="list-group list-group-flush">
                    { this.props.comments.length > 0 && this.props.comments.map( each => (
                        <li className="list-group-item" key={each.id}>
                            {each.name}
                        </li>
                    ) ) }
                </ul>

. . .

const mapStateToProps = state => {
    return state.comments;
};

const mapDisptachToProps = {
    fetchComments
};

export default connect(mapStateToProps, mapDisptachToProps)(Comments);

/src/States/Actions/comments.js
```javascript

...

export function fetchComments() {
    return {
        type: FETCH_COMMENT,
        payload: axios.get('https://jsonplaceholder.typicode.com/comments')
    };
}

```

/src/States/Reducers/comments.js
```javascript

. . .

const commentsReducer = ( state = initComments, action ) => {
    const stateChanger = {

        FETCH_COMMENT_FULFILLED: () => {
            return {
                ...state,
                fetching: false,
                fetched: true,
                comments: action.payload.data
            };
        },
. . .

    return stateChanger.hasOwnProperty(action.type) ? stateChanger[action.type]() : state;
};

export default commentsReducer;

```

/src/States/Store/index.js
```javascript
. . .

const reducers = combineReducers({
    comments: commentsReducer

. . .
```
