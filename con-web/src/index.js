import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
require("dotenv").config();

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url("./images/Split.png")`
};

class Section extends Component {
  render() {
    return (
      <section style={sectionStyle}>
        <App />
      </section>
    );
  }
}

ReactDOM.render(<Section />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
