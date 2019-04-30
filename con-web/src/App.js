import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Menu, Header, Image } from "semantic-ui-react";

import NavBar from "./components/newnav";
import MyCauses from "./components/landing";
import Admin from "./components/admin";
import Login from "./components/login";

class App extends Component {
  state = { featured_causes: [] };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("http://localhost:3001/users")
      .then(results => {
        if (results.ok) {
          console.log("results", results.json());
          return results.json();
        } else {
          throw new Error("Something went wrong...");
        }
      })
      .then(users => console.log(users))
      .catch(error => this.setState({ error }));
    console.log("yesss", this.state);
  }
  isAuthenticated() {
    const token = localStorage.getItem("token");
    return token && token !== "sn";
  }

  handleLogout() {
    localStorage.setItem("token", "");
    localStorage.setItem("Username", "");
    localStorage.setItem("ProfileImageUrl", "");
    localStorage.setItem("user_id", "");
    localStorage.setItem("user_causes", "");
    window.location.reload();

    console.log("remove token");
  }

  render() {
    const { activeItem } = this.state;
    const isAlreadyAuthenticated = this.isAuthenticated();

    return (
      <Router>
        <div>
          <Menu stackable pointing secondary>
            {!isAlreadyAuthenticated ? (
              " "
            ) : (
              // <div class="ui stackable center aligned page grid">
              //   <Header as="h1" icon Centered>
              //     <Icon name="window close" color="red" />
              //     Login to see your causes
              //   </Header>
              // </div>
              <Link to={"/mycauses"} className="nav-link">
                <Menu.Item
                  name="mycauses"
                  active={activeItem === "upcomingEvents"}
                  onClick={this.handleItemClick}
                >
                  <div>
                    {/* <Image
                      src={localStorage.getItem("ProfileImageUrl")}
                      avatar
                    />
                    <span>{localStorage.getItem("Username")}'s Causes</span> */}
                    <Header as="h3">
                      <Image
                        size="mini"
                        circular
                        src={localStorage.getItem("ProfileImageUrl")}
                      />{" "}
                      My Causes
                    </Header>
                  </div>
                </Menu.Item>
              </Link>
            )}
            {!isAlreadyAuthenticated ? (
              " "
            ) : (
              <Link to={"/featured_causes"} className="nav-link">
                <Menu.Item
                  name="causes"
                  active={activeItem === "editorials"}
                  onClick={this.handleItemClick}
                >
                  <Header as="h3" icon="like" content="Featured Causes" />
                </Menu.Item>
              </Link>
            )}
            {!isAlreadyAuthenticated ? (
              " "
            ) : (
              <Link to={"/admin"} className="nav-link">
                <Menu.Item
                  name="admin"
                  active={activeItem === "reviews"}
                  onClick={this.handleItemClick}
                >
                  <Header as="h3" icon="user" content="Admin" />
                </Menu.Item>
              </Link>
            )}
            {isAlreadyAuthenticated ? (
              " "
            ) : (
              <Menu.Item
                name="Login"
                active={activeItem === "upcomingEvents"}
                onClick={this.handleItemClick}
              >
                <Link to={"/"} className="nav-link">
                  {/* {users.map(user => (
                  <p key={user.id}>{user.username}'s Account</p>
                ))}{" "} */}
                  Login
                </Link>
              </Menu.Item>
            )}
            {!isAlreadyAuthenticated ? (
              " "
            ) : (
              <Menu.Menu position="right">
                <Link to={"/"} className="nav-link">
                  <Menu.Item onClick={this.handleLogout}>
                    <Header as="h3" icon="user">
                      Logout {localStorage.getItem("Username")}
                    </Header>
                  </Menu.Item>
                </Link>
              </Menu.Menu>
            )}
          </Menu>

          <hr />

          <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/mycauses" component={MyCauses} />

            <Route exact path="/" component={Login} />
            <Route path="/featured_causes" component={NavBar} />
          </Switch>

          {/* {featured_causes.map(cause => {
              console.log("aaaaa", cause.species);
              const compon = String.raw(cause.component);

              return (
                <Route exact path={xwx + cause.species} component={Turtle} />
              );
            })} */}
        </div>
      </Router>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import { Router, Route, BrowserRouter } from "react-router-dom";
// import "semantic-ui-css/semantic.min.css";

// import NavBar from "./components/newnav";
// import Login from "./components/login";
// import NewFeature from "./components/test_send";
// import SearchBar from "./components/searchbar";
// import MyCauses from "./components/landing";
// import Admin from "./components/admin";
// import Navbar from "./components/NavBar";

// // import NavBar from "./components/newnav";

// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <BrowserRouter>
//           <Router>
//             <Navbar />
//             {/* <Route exact path="/" component={NavBar} />
//           <Route path="/MyCauses" component={MyCauses} />
//           <Route path="/Admin" component={Admin} /> */}
//           </Router>
//         </BrowserRouter>
//       </React.Fragment>
//     );
//   }
// }

// export default App;
