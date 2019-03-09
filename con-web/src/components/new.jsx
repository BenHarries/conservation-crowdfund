import React, { Component } from "react";

class Test extends Component {
  state = {
    citations: []
  };
  componentDidMount() {
    fetch(
      "http://apiv3.iucnredlist.org/api/v3/species/citation/id/12392?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee"
    )
      .then(res => res.json())
      .then(citations => this.setState({ citations: citations }));
    console.log(this.state);
  }

  render() {
    // let citations = this.state.citations.map(item => <h1>{item.name}</h1>);
    // console.log(citations);

    // console.log(this.state);
    //returns result as an array '[{…}]
    // 0: {citation: "Blanc, J. 2008. Loxodonta africana. The IUCN Red L…LTS.T12392A3339343.en .Downloaded on 5 March 2019"}
    // length: 1
    // __proto__: Array(0)

    return <div>citations</div>;
  }
}

export default Test;
