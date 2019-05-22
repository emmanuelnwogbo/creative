import React, { Component } from 'react';
import '../scss/components/card.scss'

class Card extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { overlayStyle } = this.props;
    return (
      <div className="card">
        <figure className="card--fig">
          <div className="card--fig-overlay" style={{
            background: `${overlayStyle}`,
            opacity: '.3'
          }}></div>
          <img className="card--img" src="https://res.cloudinary.com/dxlhzerlq/image/upload/v1545772392/397004_lana-del-rey-radio_1920x1080_h_djxvda.jpg"/>
        </figure>
        <div className="card__details">
          <span className="card__details--title">{'Summer of Bliss'}</span>
          <span className="card__details--name">{'Mumen Rider'}</span>
        </div>
      </div>
    )
  }
}

export default Card;