import React, { Component } from 'react';

import Header from './Header';
import Container from './Container';
import SignInForm from './SignInForm';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MobileHeader: false
    }
  }

  rendermobileHeader = () => {
    const { MobileHeader } = this.state;
    if (MobileHeader) {
      return <MobileHeader />
    }

    return;
  }

  componentDidMount() {
    if (window.matchMedia('(max-width: 1024px)').matches) {
      import('./Header_Mobile').then(HeaderMobile => {
        this.setState({ MobileHeader: HeaderMobile.default });
      })
    }
  }

  render() {
    return (
      <div className="home">
        {this.rendermobileHeader()}
        <SignInForm />
        <Header />
        <Container />
      </div>
    )
  }
}

export default Home; 