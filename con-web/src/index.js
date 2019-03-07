import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import MenuExampleTabularOnLeft from "./components/newnav";
import MenuExampleTabularOnLeftCauses from "./components/newnavcauses";
import Test from "./components/new";

const routing = (
  <Router>
    <Switch>
      <div>
        <Route exact path="/" component={MenuExampleTabularOnLeft} />
        <Route path="/MyCauses" component={MenuExampleTabularOnLeftCauses} />
        <Test />
        {/* <Route exact component={Notfound} /> */}
      </div>
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
