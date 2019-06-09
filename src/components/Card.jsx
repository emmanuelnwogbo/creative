import React, { Component, lazy, Suspense } from 'react';
import '../scss/components/card.scss'
const VideoGifPhotoView = lazy(() => import('./VideoGifPhotoView'))

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoGifPhotoViewVisibility: 'none',
    }
  }

  toggleVideoGifPhotoViewVisibility = (e) => {
    const { videoGifPhotoViewVisibility } = this.state;
    if (videoGifPhotoViewVisibility === 'none') {
      return this.setState({ 
        videoGifPhotoViewVisibility: `block` 
      }, () => {
        document.getElementsByTagName('body')[0].style.overflowY = `hidden`;
      })
    }

    if (e.target.classList.contains('videogifphotoview')) {
      return this.setState({
        videoGifPhotoViewVisibility: 'none' 
       }, () => {
         document.getElementsByTagName('body')[0].style.overflowY = `scroll`;
       })
    }
  }

  render() {
    const {
      videoGifPhotoViewVisibility
    } = this.state;
    const {
      toggleVideoGifPhotoViewVisibility
    } = this;
    const { cardId } = this.props;

    if (this.state.videoGifPhotoViewVisibility === 'none') {
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
        <Suspense fallback={<div>loading</div>}>
          <VideoGifPhotoView 
            cardId={`${cardId}`}
            videoGifPhotoViewVisibility={videoGifPhotoViewVisibility} 
            toggleVideoGifPhotoViewVisibility={toggleVideoGifPhotoViewVisibility}
            mediaType={null}/>
        </Suspense>
      </div>
    )
  }
}

export default Card;