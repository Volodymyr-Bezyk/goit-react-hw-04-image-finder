import React, { Component } from 'react';

import Searchbar from './Searchbar';
import { Wrapper } from './App.styled';

class App extends Component {
  state = { searchQuery: '' };

  onSubmitHandler = value => {
    this.setState({ searchQuery: value });
  };

  render() {
    return (
      <Wrapper>
        <Searchbar onSubmit={this.onSubmitHandler}></Searchbar>
      </Wrapper>
    );
  }
}

export default App;
