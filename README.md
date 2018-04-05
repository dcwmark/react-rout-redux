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
