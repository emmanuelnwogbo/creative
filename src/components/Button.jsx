import React, { Component } from 'react';
import '../scss/components/btn.scss';

class Button extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { label, style } = this.props;
    return (
      <span className="btn" style={style}>
        {label}
      </span>
    )
  }
}

export default Button;