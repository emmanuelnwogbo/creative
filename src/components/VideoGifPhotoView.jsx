import React, { Component, lazy, Suspense } from 'react';

import '../scss/components/videogifphotoview.scss'
const CommentField = lazy(() => import('./CommentField'))

class VideoGifPhotoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }

  returnNumberOfComments = () => {
    const { comments } = this.state;

    if (comments.length === 0) {
      return (
        <h3 className={`videogifphotoview__content__bio__firsthalf--comments--h3`}>No comments yet</h3>
      )
    }

    if (comments.length < 2) {
      return (
        <div className={`videogifphotoview__content__bio__firsthalf--comments--headers`}>
          <h3 className={`videogifphotoview__content__bio__firsthalf--comments--h3`}>{comments.length}<span> Response</span></h3>
          <h3 className={`videogifphotoview__content__bio__firsthalf--comments--h3`}>See only creator's responses</h3>
        </div>
      )
    }

    if (comments.length > 1) {
      return (
        <div className={`videogifphotoview__content__bio__firsthalf--comments--headers`}>
          <h3 className={`videogifphotoview__content__bio__firsthalf--comments--h3`}>{comments.length}<span> Responses</span></h3>
          <h3 className={`videogifphotoview__content__bio__firsthalf--comments--h3`}>See only creator's comments</h3>
        </div>
      )
    }
  }

  returnComments = () => {
    const { comments } = this.state;

    if (comments.length > 0) {
      return comments.map(comment => {
        if (comment === 3) {
          return (
            <Suspense fallback={<div>loading</div>} key={comment}>
            <CommentField
            comment_likes={['1']}
            user_photo={'./img/me.png'} 
            user_name={`Noah Thomas`}
            comment_time={`20 Minutes Ago`}
            user_comment={`We're making a short film that describes the 
            state of love during the me too era, pls feel free to check out our preview. 
            The beauty van be found anywhere proverb is not a myth indeed.`}/>
            </Suspense>
          )
        }
        return (
          <Suspense fallback={<div>loading</div>} key={comment}>
          <CommentField
          comment_likes={[]}
          user_photo={'./img/me.png'} 
          user_name={`Noah Thomas`}
          comment_time={`20 Minutes Ago`}
          user_comment={`We're making a short film that describes the 
          state of love during the me too era, pls feel free to check out our preview. 
          The beauty van be found anywhere proverb is not a myth indeed.`}/>
          </Suspense>
        )
      })
    }
  }

  render() {
    const { 
      videoGifPhotoViewVisibility, 
      toggleVideoGifPhotoViewVisibility 
    } = this.props;

    const { comments } = this.state;
    return (
      <div className={`videogifphotoview`} style={{
        display: videoGifPhotoViewVisibility
      }} onClick={toggleVideoGifPhotoViewVisibility}>
        <div className={`videogifphotoview__content`}>
          <div className={`videogifphotoview__content__top`}>
            <figure className={`videogifphotoview__content__top--fig`}>
              <img src={`https://res.cloudinary.com/dxlhzerlq/image/upload/q_33/v1559594290/female-actress_kr0c1r.jpg`} className={`videogifphotoview__content__top--userimg`}/>
            </figure>
            <div className={`videogifphotoview__content__top__names`}>
              <div className={`videogifphotoview__content__top__names--item`}>
                <p>{`What's the name of this project`}</p>
              </div>
              <div className={`videogifphotoview__content__top__names--item`}>
                <h4 style={{cursor: 'pointer'}}><span>by</span>{`Roman Salo`}</h4>
                <span className={`videogifphotoview__content__top__names--item-follow`}>Follow</span>
              </div>
            </div>
            <div className={`videogifphotoview__content__top--btns`}>
              <span>
                <svg className={`videogifphotoview__content__top--btns-svg`}>
                  <use xlinkHref="./img/sprite.svg#icon-heart-outlined" />
                </svg>
                <p>Like</p>
              </span>
              <span>
                <svg className={`videogifphotoview__content__top--btns-svg`} viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></svg>
                <p>Save</p>
              </span>
            </div>
          </div>

          <div className={`videogifphotoview__content__media`}>
            {/*write a separate component to handle the video, gif, photo display*/}
          </div>
          
          <div className={`videogifphotoview__content__bio`}>
            <div className={`videogifphotoview__content__bio__firsthalf`}>
              <div className={`videogifphotoview__content__bio__firsthalf--text`}>
                <span>Hello everyone!</span>
                <span><p>{`https://www.behance.net/gallery/80798343/xFive-rebranding-website-redesign.`}</p></span>
                <span>{`Looking for creative design solutions? We would like to help you! Email us — info@obys.agency`}</span>
                <span>{`Behance | Facebook | Instagram | Twitter`}</span>
              </div>

              <div className={`videogifphotoview__content__bio__firsthalf--tags`}>
                  <span>love</span>
                  <span>love</span>
                  <span>love</span>
                  <span>love</span>
                  <span>sex</span>
                  <span>violence</span>
                  <span>love</span>
                  <span>love</span>
                  <span>love</span>
                  <span>love</span>
                  <span>sex</span>
                  <span>violence</span>
                  <span>love</span>
                  <span>love</span>
                  <span>love</span>
                  <span>love</span>
                  <span>sex</span>
                  <span>violence</span>
              </div>

              <div className={`videogifphotoview__content__bio__firsthalf--comments`}>
                {this.returnNumberOfComments()}

                <div className={`videogifphotoview__content__bio__firsthalf--comments-newcomment`}>
                  <div className={`videogifphotoview__content__bio__firsthalf--comments-newcomment-top`}>
                    <figure className={`videogifphotoview__content__bio__firsthalf--comments-newcomment-fig`}>
                      <img src={`https://res.cloudinary.com/dxlhzerlq/image/upload/q_33/v1559594290/female-actress_kr0c1r.jpg`} className={`videogifphotoview__content__bio__firsthalf--comments-newcomment-img`}/>
                    </figure>
                    <div className={`videogifphotoview__content__bio__firsthalf--comments-newcomment-inputparent`}>
                      <input placeholder={`Add a comment`} className={`videogifphotoview__content__bio__firsthalf--comments-newcomment-input`}/>
                    </div>
                  </div>

                  <div className={`videogifphotoview__content__bio__firsthalf--comments-newcomment-btns`}>
                    <span>Comment</span>
                  </div>
                </div>

                {this.returnComments()}
              </div>
            </div>

            <div className={`videogifphotoview__content__bio__secondhalf`}>
              <div className={`videogifphotoview__content__bio__secondhalf__sharebtns`}>
                <span>
                  <svg>
                    <use xlinkHref="./img/sprite.svg#icon-twitter" />
                  </svg>
                </span>
                <span>
                  <svg>
                    <use xlinkHref="./img/sprite.svg#icon-share2" />
                  </svg>
                </span>
              </div>

              <div className={`videogifphotoview__content__bio__secondhalf__meta`}>
                <div className={`videogifphotoview__content__bio__secondhalf__meta--item`}>
                  <svg className={`videogifphotoview__content__bio__secondhalf__meta--svg`}>
                    <use xlinkHref="./img/sprite.svg#icon-heart" />
                  </svg>
                  <p>{`1200`} likes</p>
                </div>
                <div className={`videogifphotoview__content__bio__secondhalf__meta--item`}>
                  <svg className={`videogifphotoview__content__bio__secondhalf__meta--svg`}>
                    <use xlinkHref="./img/sprite.svg#icon-eye" />
                  </svg>
                  <p>{`12000`} views</p>
                </div>
                <div className={`videogifphotoview__content__bio__secondhalf__meta--item`}>
                  <svg className={`videogifphotoview__content__bio__secondhalf__meta--svg`} viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></svg>
                  <p>{`30`} saves</p>
                </div>
                <div className={`videogifphotoview__content__bio__secondhalf__meta--item`}>
                  <svg className={`videogifphotoview__content__bio__secondhalf__meta--svg`}>
                    <use xlinkHref="./img/sprite.svg#icon-calendar1" />
                  </svg>
                  <p>{`Jun 5, 2019`}</p>
                </div>
              </div>

              <div className={`videogifphotoview__content__bio__secondhalf__works`}>
                <h4 className={`videogifphotoview__content__bio__secondhalf__works--h4`}>More by <span>{`Roman Salo`}</span></h4>
                <div className={`videogifphotoview__content__bio__secondhalf__works--photos`}>
                  <figure className={`videogifphotoview__content__bio__secondhalf__works--fig`}>
                    <img className={`videogifphotoview__content__bio__secondhalf__works--img`} src={`./img/test2.jpg`}/>
                  </figure>
                  <figure className={`videogifphotoview__content__bio__secondhalf__works--fig`}>
                    <img className={`videogifphotoview__content__bio__secondhalf__works--img`} src={`./img/test2.jpg`}/>
                  </figure>
                  <figure className={`videogifphotoview__content__bio__secondhalf__works--fig`}>
                    <img className={`videogifphotoview__content__bio__secondhalf__works--img`} src={`./img/test2.jpg`}/>
                  </figure>
                  <figure className={`videogifphotoview__content__bio__secondhalf__works--fig`}>
                    <img className={`videogifphotoview__content__bio__secondhalf__works--img`} src={`./img/test2.jpg`}/>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default VideoGifPhotoView;