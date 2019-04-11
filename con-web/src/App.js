import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import NavBar from "./components/newnav";
import Login from "./components/login";
import NewFeature from "./components/test_send";
// import NavBar from "./components/newnav";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NewFeature />
        <NavBar />
      </React.Fragment>
    );
  }
}

export default App;
