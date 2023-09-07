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
      <header class="searchbar">
        <form class="form" onSubmit={this.onFormSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.query}
          />
        </form>
      </header>
    );
  }
}
