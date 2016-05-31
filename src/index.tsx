import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, Link, browserHistory} from 'react-router';

import { Hello } from "./components/Hello";
import { App } from "./components/App";
import { Hi } from "./components/Hi";

const NoMatch = React.createClass({
  render() {
    return (
      <div>DO NOT match any route rules</div>
    )
  }
})

function href_changed() {
    
}
// <Hello compiler="TypeScript" framework="React" />
ReactDOM.render((
    <Router history={browserHistory} onUpdate={href_changed}>
        <Route path="/" component={Hi}/>
        <Route path="/r" component={App}>
            <Route path="hello" component={Hello}/>
            <Route path="*" component={NoMatch}/> 
        </Route>
    </Router>
), document.getElementById("root"));
