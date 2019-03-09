import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import NavBar from "./components/newnav";

// const App = (
//   <Switch>
//     <Router>
//       <NavBar />
//     </Router>
//   </Switch>
// );

ReactDOM.render(<NavBar />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
