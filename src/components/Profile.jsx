import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../scss/components/profile.scss';

class Profile extends Component {
  constructor(props) {
    super(props) ;
    this.state = {
      professions: [`Writer`, `Director`, `Screenwriter`]
    }
  }

  returnProfessions = () => {
    let timer = 0;
    const { professions } = this.state;
    return professions.map(profession => {
      timer+=1;
      return <span key={timer}><p>{profession}</p></span>
    })
  }

  render() {
    return (
      <div className="profile">
        <figure className="profile--bigfig">
          <img src="./img/me.png" className="profile__top--img"/>
        </figure>
        <div className="profile__card">
          <div className="profile__top">
            <figure className="profile__top--figure">
              <img src="./img/me.png" className="profile__top--img"/>
            </figure>
            <div className="profile__top--btn">
              <span>
                <svg className="profile__top--btn-svg">
                  <use xlinkHref="./img/sprite.svg#icon-mail" />
                </svg>
              </span>
              <span>Message</span>
            </div>
          </div>
        <div className="profile__middle">
          <h3 className="profile__middle--h3">George RR Martin</h3>
          <div className="profile__middle--details">
            <div className="profile__middle--details-bio">
              <div className="profile__middle--details-bio-label">
                <span>
                  <svg className="profile__middle--details-bio-svg">
                    <use xlinkHref="./img/sprite.svg#icon-suitcase" />
                  </svg>
                </span>
                {this.returnProfessions()}
              </div>
              <div className="profile__middle--details-bio-label">
                <span>
                  <svg className="profile__middle--details-bio-svg">
                    <use xlinkHref="./img/sprite.svg#icon-location" />
                  </svg>
                </span>
                <span><p>Ontario, Canada</p></span>
              </div>
              </div>
            </div>
          </div>
          <div className="profile__save--btn">
            <span>
              <svg className="profile__save--btn-svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></svg>
            </span>
            <span>Save to contacts</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;