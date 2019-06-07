import React, { Component, lazy, Suspense } from 'react';

import '../scss/components/jobview.scss';
const CommentField = lazy(() => import('./CommentField'))

class JobView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }

  returnHeaders = () => {
    const { comments } = this.state;
    if (comments.length < 1) {
      return (
        <div className={`jobview__content__commentsection--headers`}>
          <h3>There are no comments to display</h3>
        </div>
      )
    }

    return (
      <div className={`jobview__content__commentsection--headers`}>
        <h3>All Responses</h3>
        <h3>View only Responses by Job Poster</h3>
      </div>
    )
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
      jobViewVisibility,
      toggleJobViewVisibility
    } = this.props;
    const { comments } = this.state;
    return (
      <div className={`jobview`} style={{
        display: jobViewVisibility
      }} onClick={toggleJobViewVisibility}>
        <div className={`jobview__content`}>

          <figure className={`jobview__content__fig`}>
            <img src={`https://res.cloudinary.com/dxlhzerlq/image/upload/q_53/v1559594251/camera-1_hqcuwp.jpg`}/>
            <div className={`jobview__content__stats`}>
            <div className={`jobview__content__stats--item`}>
              <span>12000</span>
              <span>
                <svg className={`jobview__content__stats--svg`}>
                  <use xlinkHref="./img/sprite.svg#icon-eye" />
                </svg>
              </span>
            </div>
            <div className={`jobview__content__stats--item`}>
              <span>{comments.length}</span>
              <span>
                <svg className={`jobview__content__stats--svg`}>
                  <use xlinkHref="./img/sprite.svg#icon-bubble" />
                </svg>
              </span>
            </div>
          </div>
          </figure>

          <div className={`jobview__content__top`}>

            <div className={`jobview__content__top__left`}>
              <h3 className={`jobview__content__top--name`}>Looking For A Screenwriter</h3>
              <div className={`jobview__content__top__sentence`}>
                <span className={`jobview__content__top__sentence--label`}>Seeking:</span>
                <span className={`jobview__content__top__sentence--match`}>ScreenWriter</span>
              </div>
              <div className={`jobview__content__top__sentence`}>
                <span className={`jobview__content__top__sentence--label`}>Location:</span>
                <span className={`jobview__content__top__sentence--match`}>Vancouver, Canada, London, England, New York City, New York and Los Angeles, California</span>
              </div>
              <div className={`jobview__content__top__sentence`}>
                <span className={`jobview__content__top__sentence--label`}>Status:</span>
                <span className={`jobview__content__top__sentence--match`}>Ongoing</span>
              </div>
              <div className={`jobview__content__top__sentence`}>
                <span className={`jobview__content__top__sentence--label`}>Type:</span>
                <span className={`jobview__content__top__sentence--match`}>Feature Film</span>
              </div>
              <div className={`jobview__content__top__sentence`}>
                <span className={`jobview__content__top__sentence--label`}>Genre:</span>
                <span className={`jobview__content__top__sentence--match`}>Horror • Other</span>
              </div>
              <div className={`jobview__content__btns`}>
                <span className={`jobview__content__btns--btn`}>Apply</span>
              </div>
            </div>

            <div className={`jobview__content__top__right`}>
              <div className={`jobview__content__top__right__postedby`}>
                <figure>
                  <img src={`https://res.cloudinary.com/dxlhzerlq/image/upload/q_33/v1559594290/female-actress_kr0c1r.jpg`}/>
                </figure>
                <div className={`jobview__content__top__sentence`}>
                  <span className={`jobview__content__top__sentence--label`}>Posted by:</span>
                  <span className={`jobview__content__top__sentence--match`}>Jane Wtason</span>
                </div>
              </div>
              <div className={`jobview__content__top__sentence`}>
                <span className={`jobview__content__top__sentence--label`}>Date Added:</span>
                <span className={`jobview__content__top__sentence--match`}>Jan 27, 2019</span>
              </div>
              <div className={`jobview__content__top__sentence`}>
                <span className={`jobview__content__top__sentence--label`}>Date Updated:</span>
                <span className={`jobview__content__top__sentence--match`}>Jun 27, 2019</span>
              </div>
              <div className={`jobview__content__top__sentence`}>
                <span className={`jobview__content__top__sentence--label`}>Deadline:</span>
                <span className={`jobview__content__top__sentence--match`}>July 27, 2019</span>
              </div>
            </div>
          </div>

          <div className={`jobview__content__bottom`}>
            <div className={`jobview__content__bottom__bio`}>
              <h3 className={`jobview__content__bottom__bio--h3`}>About This Job</h3>
              <div className={`jobview__content__bottom__bio--description`}>
                <span>{`Hi, I am looking for a screen writer and have been doing so for a couple of months. I am currently working on developing a horror/paranormal feature film idea. I have a basis that I would want the story to revolve around, but it's a bit too general as of now.
                I would need a writer that has a very creative mind within, and is able to visualize how the story connects and transitions.`}</span>
                <span>{`please contact me directly to my email marianagabrieladiacon@gmail.com and we can discuss any further set ups.`}</span>
                <span>{`location does not matter`}</span>
              </div>

              <div className={`jobview__content__bottom__bio__media`}>
                <figure>
                  <img src={`https://res.cloudinary.com/dxlhzerlq/image/upload/q_33/v1559594290/female-actress_kr0c1r.jpg`}/>
                </figure>
                <figure>
                  <img src={`https://res.cloudinary.com/dxlhzerlq/image/upload/q_33/v1559594290/female-actress_kr0c1r.jpg`}/>
                </figure>
                <figure>
                  <img src={`https://res.cloudinary.com/dxlhzerlq/image/upload/q_33/v1559594290/female-actress_kr0c1r.jpg`}/>
                </figure>
                <figure>
                  <img src={`https://res.cloudinary.com/dxlhzerlq/image/upload/q_33/v1559594290/female-actress_kr0c1r.jpg`}/>
                </figure>
              </div>
            </div>
          </div>

          <div className={`jobview__content__commentsection`}>
            {this.returnHeaders()}
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

            {this.returnComments()}
          </div>

          <div className={`jobview__content__share`}>
            <div className={`jobview__content__share__header`}><p>Share This Job</p></div>
              <div className={`jobview__content__share__icons`}>
                <span>
                  <svg className={`jobview__content__share__icons--svg`}>
                    <use xlinkHref="./img/sprite.svg#icon-twitter" />
                  </svg>
                </span>
                <span>
                  <svg className={`jobview__content__share__icons--svg`}>
                    <use xlinkHref="./img/sprite.svg#icon-share2" />
                  </svg>
                </span>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default JobView;