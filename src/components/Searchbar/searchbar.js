import React, { Component } from 'react';

export class SearchBar extends Component {
  state = {
    query: '',
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  };
  onInputChange = e => {
    this.setState({ query: e.target.value });
  };
  render() {
    return (
      <header>
        <form onSubmit={this.onFormSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.onInputChange}
          />
        </form>
      </header>
    );
  }
}
