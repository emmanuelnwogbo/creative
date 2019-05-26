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
        <div className="card--type">
          <p>video</p>
        </div>
        <figure className="card--fig">
          <div className="card--sidenav">
            <svg  className="card--sidenav-svg">
              <use xlinkHref="./img/sprite.svg#icon-heart-outlined" />
            </svg>
            <svg className="card--sidenav-svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></svg>
            <svg  className="card--sidenav-svg">
              <use xlinkHref="./img/sprite.svg#icon-share" />
            </svg>
            </div>
          <div className="card--fig-overlay" style={{
            background: `${overlayStyle}`,
            opacity: '.3'
          }}></div>
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