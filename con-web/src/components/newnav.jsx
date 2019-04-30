import React, { Component } from "react";
import { Grid, Menu, Segment, Sticky, Header } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";

import Features from "./features";
import MyCauses from "./landing";
import Turtle from "./project";
import SearchBar from "./searchbar";
import "./newnav.css";

const API =
  "http://apiv3.iucnredlist.org/api/v3/species/loxodonta%20africana?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee";
// const API = "https://randomuser.me/api/?results=500";

let featured_causes = [
  {
    id: 1,
    species: "Turtle",
    image:
      "http://2.bp.blogspot.com/-4dc4vkZLlGo/TWHh1qNIJSI/AAAAAAAAEfg/DBdScbOCEYE/s1600/vista-wallpaper-green-sea-turtle.jpg"
  },
  {
    id: 2,
    species: "Giraffe",
    image: "https://retrieverman.files.wordpress.com/2012/05/giraffe.jpg"
  },
  {
    id: 3,
    species: "Mongoose",
    image:
      "https://www.marwell.org.uk/media/images/full/yellow_mongoose_shutterstock_296510669.jpg"
  }
];

const routing = (
  <Router>
    <Switch>
      {featured_causes.map(cause => {
        console.log("aaaaa", cause);
        return <Route exact path={"/" + cause.species} component={Turtle} />;
      })}
    </Switch>
  </Router>
);

export default class NavBar extends Component {
  state = { users: [], isLoading: false, error: null, pictures: [] };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("/users")
      .then(results => {
        if (results.ok) {
          return results.json();
        } else {
          throw new Error("Something went wrong...");
        }
      })
      .then(users => this.setState({ users, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
    fetch(API)
      .then(result => {
        if (result.ok) {
          return result.json();
        } else {
          throw new Error("Something went wrong...");
        }
      })
      .then(data => {
        let pictures = data.result.map(pic => {
          return (
            <div key={pic.results}>
              <p>{pic.category}</p>
            </div>
          );
        });
        this.setState({ pictures: pictures });
      });
  }
  handleContextRef = contextRef => this.setState({ contextRef });
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  isAuthenticated() {
    const token = localStorage.getItem("token");
    return token && token.length > 5;
  }
  render() {
    var isAlreadyAuthenticated = this.isAuthenticated();

    // if (error) {
    //   return <p>{error.message}</p>;
    // }

    // if (isLoading) {
    //   return <p>Loading...</p>;
    // }
    return (
      <div>
        {!isAlreadyAuthenticated ? (
          <Redirect to={{ pathname: "/" }} />
        ) : (
          <Segment>
            <div class="ui one column stackable center aligned page grid">
              <div class="column six wide">
                <Header as="h1" textAlign="center">
                  Featured Causes
                </Header>{" "}
                <Segment textAlign="center" color="blue">
                  <SearchBar />
                </Segment>
              </div>
            </div>
            <div class="restrict">
              <Features />
            </div>
          </Segment>
        )}
      </div>
    );
  }
}
