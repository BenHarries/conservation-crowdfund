import _ from "lodash";
import React, { Component } from "react";
import { Search, Grid, Header, Segment } from "semantic-ui-react";

const source = _.times(5, () => ({
  // title: faker.company.companyName(),
  // description: faker.company.catchPhrase(),
  // image: faker.internet.avatar(),
  // price: faker.finance.amount(0, 100, 2, "$")
}));

export default class SearchBar extends Component {
  state = {
    featured_causes: []
  };
  componentDidMount() {
    fetch("http://localhost:3001/featured_causes")
      .then(res => res.json())
      .then(featured_causes => this.setState({ featured_causes }));
  }
  componentWillMount() {
    this.resetComponent();
  }
  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: "" });

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.species });
  // this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result.species);

      this.setState({
        isLoading: false,
        results: _.filter(this.state.featured_causes, isMatch)
      });
    }, 300);
  };

  render() {
    let { isLoading, value, results } = this.state;
    // var obj = JSON.parse(results);
    // console.log("aaaaa", obj);

    // obj.title = obj.species;
    // delete obj.species;

    // results = JSON.stringify([obj]);
    // console.log("state of search", this.state);

    return (
      <Search
        fluid
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true
        })}
        results={results}
        value={value}
        {...this.props}
      />
    );
  }
}
