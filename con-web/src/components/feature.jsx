import React, { Component } from "react";
import { Image, Card, Icon, Button, Progress, Header } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "./feature.css";

const API =
  "http://apiv3.iucnredlist.org/api/v3/species/loxodonta%20africana?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee";

const fetch_current_user = "users/" + localStorage.Username;
console.log("now thats what", fetch_current_user);

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      species: this.props.title,
      added: false,
      current_user_causes: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  increment = () =>
    this.setState({
      percent: this.state.percent >= 100 ? 0 : this.state.percent + 20
    });
  componentDidMount() {
    console.log("yeah yeah", API + "/" + this.state.species);

    fetch(API)
      .then(result => {
        if (result.ok) {
          return result.json();
        } else {
          throw new Error("Something went wrong...");
        }
      })
      .then(data => {
        let category = data.result.map(pic => {
          return (
            <p class="catagory-text">
              <strong>{pic.category}</strong>
            </p>
          );
        });
        this.setState({ category: category });
      });

    fetch(fetch_current_user)
      .then(res => res.json())
      .then(
        users => this.setState({ current_user_causes: users[0].causes }),
        users => console.log("123", users[0].causes),
        console.log("123", this.state),

        users => (window.AllCauses = users[0].causes)
      );

    function arrayContains(needle, arrhaystack) {
      return arrhaystack.indexOf(needle) > -1;
    }

    if (
      this.state.current_user_causes &&
      arrayContains(this.state.species, this.state.current_user_causes)
    ) {
      console.log("True in render", this.state.species);
      // return true;
    }
  }

  handleClick() {
    // this.setState({ added: true });
    this.forceUpdate();
    console.log("state", this.state);
    const data = {
      user: localStorage.getItem("Username"),
      cause_to_add: this.state.species
    };

    fetch("/users/update_cause", {
      method: "POST",

      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: { "Content-Type": "application/json" }
    });

    fetch(fetch_current_user)
      .then(res => res.json())
      .then(
        users => this.setState({ current_user_causes: users[0].causes }),
        users => console.log("123", users[0].causes),
        console.log("123", this.state),
        users => (window.AllCauses = users[0].causes)
      );
    function arrayContains(needle, arrhaystack) {
      return arrhaystack.indexOf(needle) > -1;
    }

    if (
      this.state.current_user_causes &&
      arrayContains(this.state.species, this.state.current_user_causes)
    ) {
      console.log("True in render", this.state.species);
      // return true;
    }
  }

  arrayContains(needle, arrhaystack) {
    return arrhaystack.indexOf(needle) > -1;
  }

  isAdded() {
    if (
      this.state.current_user_causes &&
      this.arrayContains(this.state.species, this.state.current_user_causes)
    ) {
      console.log("True in render", this.state.species);
      return (
        <Button basic color="green" floated="right">
          <Icon name="check" />{" "}
        </Button>
      );
      // return true;
    } else {
      console.log("false");

      return (
        <Button basic color="blue" floated="right" onClick={this.handleClick}>
          <Icon name="add" />{" "}
        </Button>
      );
    }
  }

  render() {
    const { key } = this.props;
    const { title } = this.props;
    const { image } = this.props;
    const { category } = this.props;
    const { user_who_added } = this.props;
    const slash = "/";
    const Linker = slash.concat(title);
    // function isAdded() {

    // }

    const added = this.isAdded();

    // console.log(added);

    console.log(Linker);
    return (
      <Card id={key}>
        <Image src={image} />

        <Card.Content>
          <div class="category">{category}</div>{" "}
          <Card.Header>{title}</Card.Header>{" "}
          <Card.Meta>
            {/* <span className="date">
              by{" "}
              <NavLink to={Linker}>
                <strong>
                  <em>{title}</em>
                </strong>
              </NavLink>
            </span> */}
          </Card.Meta>
          {/* Allows maping turtle nests and increses chance... */}
          <Card.Description> </Card.Description>
        </Card.Content>

        <Card.Content extra>
          {" "}
          <Header>Created by: {user_who_added}</Header>
          <div>{added}</div>
        </Card.Content>
      </Card>
    );
  }
}

export default Feature;
