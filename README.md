1. npx create-react-app react-rout-redux
1. cd react-rout-redux/
1. npm install --save react-router-dom
1. npm install --save react-bootsrap
1. index.html --
   copied
   > https://react-bootstrap.github.io/getting-started/introduction
   
   > \<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
1. npm install --save react-redux


React Router v4

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