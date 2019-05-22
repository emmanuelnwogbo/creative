import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from './components/Home'

import { userAccountStatus } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { userAccountStatus } = this.props;
    const signedIn = () => {
      return null
    }
    userAccountStatus(signedIn());
  }

  render() {
    //console.log(this.props)
    return (
      <Home />
    )
  }
}

function mapStateToProps(state) {
  const { userAccountStat } = state;
  return {
    userAccountStat
  }
}

export default connect(mapStateToProps, { userAccountStatus })(App);