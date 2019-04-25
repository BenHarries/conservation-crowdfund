import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

import NavBar from "./components/newnav";
import SearchBar from "./components/searchbar";
import MyCauses from "./components/landing";
import Admin from "./components/admin";
import Turtle from "./components/project";

class App extends Component {
  state = { featured_causes: [] };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("/users")
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
    // fetch("/featured_causes")
    //   .then(results => {
    //     if (results.ok) {
    //       return results.json();
    //     } else {
    //       throw new Error("Something went wrong...");
    //     }
    //   })
    //   .then(featured_causes => this.setState({ featured_causes }))
    //   .catch(error => this.setState({ error }));
    // console.log("featured?", this.state);
  }

  render() {
    const { activeItem } = this.state;
    const { users } = this.state;

    let featured_causes = [
      {
        id: 1,
        species: "Turtle",
        image:
          "http://2.bp.blogspot.com/-4dc4vkZLlGo/TWHh1qNIJSI/AAAAAAAAEfg/DBdScbOCEYE/s1600/vista-wallpaper-green-sea-turtle.jpg",
        component: Turtle
      },
      {
        id: 2,
        species: "Giraffe",
        image: "https://retrieverman.files.wordpress.com/2012/05/giraffe.jpg",
        component: Turtle
      },
      {
        id: 3,
        species: "Mongoose",
        image:
          "https://www.marwell.org.uk/media/images/full/yellow_mongoose_shutterstock_296510669.jpg",
        component: Turtle
      }
    ];
    return (
      <Router>
        <div>
          <Menu>
            <Link to={"/"} className="nav-link">
              <Menu.Item
                name="editorials"
                active={activeItem === "editorials"}
                onClick={this.handleItemClick}
              >
                Featured Causes
              </Menu.Item>
            </Link>

            <Link to={"/admin"} className="nav-link">
              <Menu.Item
                name="reviews"
                active={activeItem === "reviews"}
                onClick={this.handleItemClick}
              >
                Admin
              </Menu.Item>
            </Link>
            <Link to={"/mycauses"} className="nav-link">
              <Menu.Item
                name="upcomingEvents"
                active={activeItem === "upcomingEvents"}
                onClick={this.handleItemClick}
              >
                {/* {users.map(user => (
                  <p key={user.id}>{user.username}'s Account</p>
                ))}{" "} */}
                My Causes
              </Menu.Item>
            </Link>
          </Menu>

          <hr />
          <Switch>
            <Route exact path="/" component={NavBar} />
            <Route path="/admin" component={Admin} />
            <Route path="/mycauses" component={MyCauses} />

            {/* {featured_causes.map(cause => {
              console.log("aaaaa", cause.species);
              const compon = String.raw(cause.component);

              return (
                <Route exact path={"/" + cause.species} component={Turtle} />
              );
            })} */}
          </Switch>
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
