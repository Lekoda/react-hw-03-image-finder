import React, { Component } from 'react';
import { SearchBar } from './Searchbar/searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    query: '',
    images: [],
  };

  handleFormSubmit = query => {
    this.setState({ query });
    console.log(query);
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleFromSubmit} />
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
}
