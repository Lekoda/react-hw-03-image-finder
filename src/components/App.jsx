import React, { Component } from 'react';
import { SearchBar } from './Searchbar/searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  handleFormSubmit = query => {
    this.setState({ query: `${Date.now()}/${query}`, images: [], page: 1 });
    console.log(query);
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      //http запрос на сервер
      //this.setState({images:[], query:''})
      console.log(
        `http запрос на сервер ${this.state.query}, и ${this.state.page}`
      );
    }
  }
  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />
        <Loader onClick={this.handleLoadMore} />
      </div>
    );
  }
}
