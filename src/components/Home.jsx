import React, { Component } from 'react';

import Header from './Header';
import Container from './Container';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Container />
      </div>
    )
  }
}

export default Home; 