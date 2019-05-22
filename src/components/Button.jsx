import React, { Component } from 'react';
import { connect } from 'react-redux';

import { btnClickHandler } from '../actions';

import '../scss/components/btn.scss';

class Button extends Component {
  constructor(props) {
    super(props)
  }

  handleBtnClicks = () => {
    const { btnClickHandler, userAccountStat } = this.props;
    btnClickHandler(userAccountStat);
  }

  render() {
    const { label, classLabels } = this.props;
    return (
      <span className={classLabels} onClick={this.handleBtnClicks}>
        {label}
      </span>
    )
  }
}

function mapStateToProps(state) {
  const { userAccountStat } = state;
  return {
    userAccountStat
  }
}

export default connect(mapStateToProps, { btnClickHandler })(Button);