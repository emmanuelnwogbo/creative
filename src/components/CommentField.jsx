import React, { Component } from 'react';

import '../scss/components/comment_field.scss'

class CommentField extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  renderIfIncludesMedia = (media) => {
    //still need to check what media type it is to decide what 
    //media component to return; (video, gif, photo)
    if (media && media !== null & media !== undefined) {
      return (
        <figure className={`comment__field__bottom--media-figgif`}>
          {/*only make visible while media is buffering or waiting
            <div className={`comment__field__bottom--mediaoverlay`}>
            <svg className={`comment__field__bottom--medialoadingsvg`}>
              <use xlinkHref="./img/sprite.svg#icon-spinner" />
            </svg>
      </div>*/}
          <div className={`comment__field__bottom--mediatype`}>
            <p>{`gif`}</p>
          </div>
          <img className={`comment__field__bottom--media-img`} src={media}/>
        </figure>
      )
    }
    return;
  }

  renderSocialIcons = (include_socialIcons) => {
    if (include_socialIcons && include_socialIcons !== null & include_socialIcons !== undefined) {
      return (
        <div className={`comment__field__bottom--icons`}>
          <div className={`comment__field__bottom--icons-icon`}>
            <svg className={`comment__field__bottom--svg`}>
              <use xlinkHref="./img/sprite.svg#icon-thumbs-up" />
            </svg>
            <div className={`comment__field__bottom--stat`}><p>{`500`}</p></div>
          </div>
          <div className={`comment__field__bottom--icons-icon`}>
            <svg className={`comment__field__bottom--svg`}>
              <use xlinkHref="./img/sprite.svg#icon-thumbs-down" />
            </svg>
            <div className={`comment__field__bottom--stat`}><p>{`1000`}</p></div>
          </div>
          <div className={`comment__field__bottom--icons-icon`}>
            <svg className={`comment__field__bottom--svg`}>
              <use xlinkHref="./img/sprite.svg#icon-bubble2" />
            </svg>
            <div className={`comment__field__bottom--stat`}><p>{`50`}</p></div>
          </div>
        </div>
      )
    }
    return;
  }

  render() {
    let { 
      user_photo, 
      user_name, 
      user_comment, 
      comment_likes, 
      comment_replies,
      comment_time,
      media,
      include_socialIcons
    } = this.props;
    console.log(comment_likes)

    return (
      <div className={`comment__field`}>
        <div className={`comment__field--save`}>
          <svg className={`comment__field--save-svg`}>
            <use xlinkHref="./img/sprite.svg#icon-heart-outlined" />
          </svg>
          <span>{comment_likes && comment_likes.length ? comment_likes.length : ""}</span>
        </div>
        <div className={`comment__field__top`}>
          <figure className={`comment__field__top--fig`}>
            <img src={user_photo} className={`comment__field__top--img`}/>
          </figure>
          <div className={`comment__field__top__text`}>
            <h3 className={`comment__field__top__text--h3`}>{user_name}</h3>
            <div className={`comment__field__top__text--body`}>
              <p>{comment_time}</p>
            </div>
          </div>
        </div>
        <div className={`comment__field__bottom`}>
          <div className={`comment__field__bottom--comment`}>
            <p>{user_comment}</p>
          </div>
          {this.renderIfIncludesMedia(media)}
          {this.renderSocialIcons(include_socialIcons)}
        </div>
        <div className={`comment__field__crumbs`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`comment__field__crumbs__options`}>
          <span>Delete</span>
          <span>Delete</span>
          <span>Delete</span>
          <span>Delete</span>
        </div>
      </div>
    )
  }
}

export default CommentField;