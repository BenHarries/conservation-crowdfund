// import React, { Component } from "react";
// import { Image, Card, Icon, Button, Header } from "semantic-ui-react";
// import "./feature.css";

// const API1 = "https://apiv3.iucnredlist.org/api/v3/species/";
// const API2 =
//   "?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee";

// const fetch_current_user = "/users/" + localStorage.Username;

// class Feature extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       species: this.props.title,
//       added: false,
//       current_user_causes: [],
//       category: ""
//     };
//     this.handleClick = this.handleClick.bind(this);
//     this.handleDeleteClick = this.handleDeleteClick.bind(this);
//   }

//   increment = () =>
//     this.setState({
//       percent: this.state.percent >= 100 ? 0 : this.state.percent + 20
//     });
//   componentDidMount() {
//     const split_name = this.props.scientific_name.split(" ");
//     console.log("this", split_name);
//     const API = API1.concat(split_name[0], "%20", split_name[1], API2);
//     console.log("THis is the API of dreams", API);

//     fetch(API)
//       .then(result => {
//         if (result.ok) {
//           return result.json();
//         } else {
//           throw new Error("Something went wrong...");
//         }
//       })
//       .then(data => {
//         let category = data.result.map(species => {
//           return (
//             <p class="catagory-text">
//               <strong>{species.category}</strong>
//             </p>
//           );
//         });
//         this.setState({ category: category });
//         console.log("this state", category, this.state.category);
//       });

//     fetch("http://localhost:3001" + fetch_current_user)
//       .then(res => res.json())
//       .then(
//         users => this.setState({ current_user_causes: users[0].causes }),
//         users => console.log("123", users[0].causes),
//         console.log("123", this.state)
//       );

//     function arrayContains(needle, arrhaystack) {
//       return arrhaystack.indexOf(needle) > -1;
//     }

//     if (
//       this.state.current_user_causes &&
//       arrayContains(this.state.species, this.state.current_user_causes)
//     ) {
//       console.log("True in render", this.state.species);
//       // return true;
//     }
//   }

//   handleClick() {
//     // this.setState({ added: true });
//     this.forceUpdate();
//     console.log("state", this.state);
//     const data = {
//       user: localStorage.getItem("Username"),
//       cause_to_add: this.state.species
//     };

//     fetch("http://localhost:3001/users/update_cause", {
//       method: "POST",

//       body: JSON.stringify(data), // data can be `string` or {object}!
//       headers: { "Content-Type": "application/json" }
//     });

//     fetch("http://localhost:3001" + fetch_current_user)
//       .then(res => res.json())
//       .then(
//         users => this.setState({ current_user_causes: users[0].causes }),
//         users => console.log("123", users[0].causes),
//         console.log("123", this.state),
//         users => (window.AllCauses = users[0].causes)
//       );
//     function arrayContains(needle, arrhaystack) {
//       return arrhaystack.indexOf(needle) > -1;
//     }

//     if (
//       this.state.current_user_causes &&
//       arrayContains(this.state.species, this.state.current_user_causes)
//     ) {
//       console.log("True in render", this.state.species);
//       // return true;
//     }
//   }

//   handleDeleteClick() {
//     console.log("delete click", this.state);
//     var a_data = {
//       user: localStorage.getItem("Username"),
//       cause_to_delete: this.state.species
//     };
//     console.log("delete click", a_data);

//     fetch("http://localhost:3001/users/update_cause_remove", {
//       method: "POST",

//       body: JSON.stringify(a_data), // data can be `string` or {object}!
//       headers: { "Content-Type": "application/json" }
//     });

//     fetch("http://localhost:3001" + fetch_current_user)
//       .then(res => res.json())
//       .then(
//         users => this.setState({ current_user_causes: users[0].causes }),
//         users => console.log("123", users[0].causes),
//         console.log("123", this.state),
//         users => (window.AllCauses = users[0].causes)
//       );
//     function arrayContains(needle, arrhaystack) {
//       return arrhaystack.indexOf(needle) > -1;
//     }

//     if (
//       this.state.current_user_causes &&
//       arrayContains(this.state.species, this.state.current_user_causes)
//     ) {
//       console.log("True in render", this.state.species);
//       // return true;
//     }
//   }

//   arrayContains(needle, arrhaystack) {
//     return arrhaystack.indexOf(needle) > -1;
//   }

//   isAdded() {
//     if (
//       this.state.current_user_causes &&
//       this.arrayContains(this.state.species, this.state.current_user_causes)
//     ) {
//       console.log("True in render", this.state.species);
//       return (
//         <Button
//           compact
//           basic
//           small
//           color="red"
//           floated="right"
//           onClick={this.handleDeleteClick}
//         >
//           <Icon name="heart" />
//           Like
//         </Button>
//       );
//       // return true;
//     } else {
//       console.log("false");

//       return (
//         <Button
//           compact
//           small
//           basic
//           color="black"
//           floated="right"
//           onClick={this.handleClick}
//         >
//           <Icon name="heart" />
//           Like
//         </Button>
//       );
//     }
//   }

//   render() {
//     const { key } = this.props;
//     const { title } = this.props;
//     const { image } = this.props;
//     const category = this.state.category;
//     const { scientific_name } = this.props;
//     const { user_who_added } = this.props;
//     const slash = "/";
//     console.log("this cat", this.state);
//     const Linker = slash.concat(title);
//     // function isAdded() {

//     // }

//     const added = this.isAdded();

//     // console.log(added);

//     console.log(Linker);
//     return (
//       <Card id={key} raised>
//         <Image src={image} />

//         <Card.Content>
//           <div class="category">{category}</div>{" "}
//           <Card.Header>{title}</Card.Header> <br />
//           <Card.Header as="h4">{scientific_name}</Card.Header>{" "}
//           <Card.Meta>
//             {/* <span className="date">
//               by{" "}
//               <NavLink to={Linker}>
//                 <strong>
//                   <em>{title}</em>
//                 </strong>
//               </NavLink>
//             </span> */}
//           </Card.Meta>
//           {/* Allows maping turtle nests and increses chance... */}
//           <Card.Description> </Card.Description>
//         </Card.Content>

//         <Card.Content extra>
//           <Header as="h5">Created by: {user_who_added}</Header>
//           <div>{added}</div>
//         </Card.Content>
//       </Card>
//     );
//   }
// }

// export default Feature;

//Bottom

import React, { Component } from "react";
import { Image, Card, Icon, Button, Header } from "semantic-ui-react";
import "./feature.css";

const API1 = "http://apiv3.iucnredlist.org/api/v3/species/";
const API2 =
  "?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee";

const fetch_current_user = "/users/" + localStorage.Username;

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      species: this.props.title,
      added: false,
      current_user_causes: [],
      category: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  increment = () =>
    this.setState({
      percent: this.state.percent >= 100 ? 0 : this.state.percent + 20
    });
  componentDidMount() {
    if (this.props.scientific_name) {
      const split_name = this.props.scientific_name.split(" ");
      const API = API1.concat(split_name[0], "%20", split_name[1], API2);

      fetch(API)
        .then(result => {
          if (result.ok) {
            return result.json();
          } else {
            throw new Error("Something went wrong...");
          }
        })
        .then(data => {
          let category = data.result.map(species => {
            return (
              <p class="catagory-text">
                <strong>{species.category}</strong>
              </p>
            );
          });
          this.setState({ category: category });
        });
    }

    fetch("http://localhost:3001" + fetch_current_user)
      .then(res => res.json())
      .then(
        users => this.setState({ current_user_causes: users[0].causes }),

        users => (window.AllCauses = users[0].causes)
      );

    function arrayContains(needle, arrhaystack) {
      return arrhaystack.indexOf(needle) > -1;
    }

    if (
      this.state.current_user_causes &&
      arrayContains(this.state.species, this.state.current_user_causes)
    ) {
      // return true;
    }
  }

  handleClick() {
    this.forceUpdate();
    const data = {
      user: localStorage.getItem("Username"),
      cause_to_add: this.state.species
    };

    fetch("http://localhost:3001" + "/users/update_cause", {
      method: "POST",

      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: { "Content-Type": "application/json" }
    });

    fetch("http://localhost:3001" + fetch_current_user)
      .then(res => res.json())
      .then(
        users => this.setState({ current_user_causes: users[0].causes }),
        users => (window.AllCauses = users[0].causes)
      );
  }

  handleDeleteClick() {
    if (
      this.state.current_user_causes &&
      this.arrayContains(this.state.species, this.state.current_user_causes)
    ) {
      var a_data = {
        user: localStorage.getItem("Username"),
        cause_to_delete: this.state.species
      };

      fetch("http://localhost:3001/users/update_cause_remove", {
        method: "POST",

        body: JSON.stringify(a_data),
        headers: { "Content-Type": "application/json" }
      });

      fetch("http://localhost:3001" + fetch_current_user)
        .then(res => res.json())
        .then(
          users => this.setState({ current_user_causes: users[0].causes }),
          users => (window.AllCauses = users[0].causes)
        );
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
      return (
        <Button
          compact
          basic
          small
          color="red"
          floated="right"
          onClick={this.handleDeleteClick}
        >
          <Icon name="heart" />
          Like
        </Button>
      );
      // return true;
    } else {
      return (
        <Button
          compact
          small
          basic
          color="black"
          floated="right"
          onClick={this.handleClick}
        >
          <Icon name="heart" />
          Like
        </Button>
      );
    }
  }

  render() {
    const { key } = this.props;
    const { title } = this.props;
    const { image } = this.props;
    const category = this.state.category;
    const { scientific_name } = this.props;
    const { user_who_added } = this.props;

    const added = this.isAdded();

    return (
      <Card id={key} raised>
        <Image src={image} />

        <Card.Content>
          <div class="category">{category}</div>{" "}
          <Card.Header>{title}</Card.Header> <br />
          <Card.Header as="h4">{scientific_name}</Card.Header> <Card.Meta />
          <Card.Description> </Card.Description>
        </Card.Content>

        <Card.Content extra>
          <Header as="h5">Created by: {user_who_added}</Header>
          <div>{added}</div>
        </Card.Content>
      </Card>
    );
  }
}

export default Feature;
