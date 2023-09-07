import React, { Component } from 'react';
import { SearchBar } from './Searchbar/searchbar';

export class App extends Component {
  state = {
    query: '',
  };

  handleFormSubmit = query => {
    this.setState({ query });
    console.log(query);
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleFromSubmit} />
      </div>
    );
  }
}
