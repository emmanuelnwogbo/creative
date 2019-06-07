import React, { Component } from 'react';
import '../scss/components/card.scss'

class Card extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { toggleVideoGifPhotoViewVisibility } = this.props;
    return (
      <div className="card" onClick={toggleVideoGifPhotoViewVisibility}>
        <div className="card--type">
          <p>{`video`}</p>
        </div>
        <figure className="card--fig">
          <img className="card--img" src="./img/test3.jpg"/>
        </figure>
        <div className="card__details">
          <span className="card__details--title">{'Summer of Bliss'}</span>
          <div className="card__details--poster">
            <figure className="card__details--poster-fig">
              <img className="card__details--poster-img" src="./img/test2.jpg"/>
            </figure>
            <span className="card__details--poster-name">{'Mumen Rider'}</span>
          </div>
          <div className="card__details--icons">
            <span className="card__details--icons-body">
              <span className="card__details--icons-count">{'23,000'}</span>
              <svg  className="card__details--icons-svg">
                <use xlinkHref="./img/sprite.svg#icon-eye" />
              </svg>
            </span>
            <span className="card__details--icons-body">
              <span className="card__details--icons-count">{'23,000'}</span>
              <svg  className="card__details--icons-svg">
                <use xlinkHref="./img/sprite.svg#icon-heart" />
              </svg>
            </span>
            <span className="card__details--icons-body">
              <span className="card__details--icons-count">{'23,000'}</span>
              <svg  className="card__details--icons-svg">
                <use xlinkHref="./img/sprite.svg#icon-bubble" />
              </svg>
            </span>
          </div>
          <span className="card--crumbs">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
    )
  }
}

export default Card;