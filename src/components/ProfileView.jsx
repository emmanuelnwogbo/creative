import React, { Component, lazy, Suspense } from 'react';

import '../scss/components/profileview.scss'

class ProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const {
      toggleProfileViewVisibility, 
      profileViewVisibility 
    } = this.props;

    return (
      <div className={`profileview`} style={{
        display: profileViewVisibility
      }} onClick={toggleProfileViewVisibility}>
        <div className={`profileview__content`}>

          <div className={`profileview__content__top`}>
            <figure className={`profileview__content__headshot`}>
              <img src={`https://res.cloudinary.com/dxlhzerlq/image/upload/q_33/v1559594290/female-actress_kr0c1r.jpg`} className={`profileview__content__headshot--img`}/>
            </figure>
          
            <div className={`profileview__content__description`}>
              <h5 className={`profileview__content__description__h5-1`}>{`Samus Aran`}</h5>
              <span>{`Director, Producer and Screenwriter`}</span>
              <span>{`New York City, New York`}</span>
              <div className={`profileview__content__description__phenotype`}>
                <div className={`profileview__content__description__phenotype--gender`}>
                  <span>Gender</span>
                  <span>Female</span>
                </div>
                <div className={`profileview__content__description__phenotype--height`}>
                  <span>Height</span>
                  <span>5'3</span>
                </div>
              </div>
              <div className={`profileview__content__description__share`}>
                <div className={`profileview__content__description__share__header`}><p>Share This Profile</p></div>
                <div className={`profileview__content__description__share__icons`}>
                  <span>
                    <svg className={`profileview__content__description__share__icons--svg`}>
                      <use xlinkHref="./img/sprite.svg#icon-twitter" />
                    </svg>
                  </span>
                  <span>
                    <svg className={`profileview__content__description__share__icons--svg`}>
                      <use xlinkHref="./img/sprite.svg#icon-share2" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className={`profileview__content__description__btns`}>
                <span>Message</span>
                <span>Save to network</span>
              </div>
            </div>
          </div>

          <div className={`profileview__content__description__bio`}>
            <h5 className={`profileview__content__description__h5-2`}>{`About Samus`}</h5>
            <span><p>{`Samus Aran was destined to be a filmmaker. In fact, he grew up just a stone's throw from the house that served as the Corleone Home in the Academy-Award winning film, "The Godfather." He also watched the Oscars intently as his cousin Danny Aiello was Nominated for Best Supporting Actor in 1990. Eventually, it was time for Borowski to get in the game. After selling his first option in 1999 and attending the Cannes Film Festival, Borowski produced 10 films, including 4 shorts. Among them, he directed and produced the film, "Night Club," Academy-Award Winner Ernie Borgnine's final theatrical feature. It also starred Natasha Lyonne, Paul Sorvino and Academy-Award Nominee Sally Kellerman and was one of the final films in Mickey Rooney’s legendary career. "Night Club," won a whopping 16 awards over 9 film festivals. Before that, Borowski wrote, produced and directed, "The Mandala Maker", a short for Academy-Award consideration in 2010 that went on to qualify for the Oscars in the Live-Action Short category. It garnered 7 awards over 8 festivals, including 3 in the Accolade Competition (for Direction, Short Film and Lead Actress). It also played in the prestigious Film Columbia Festival, alongside 2010 Academy-Award Best Picture nominees, "Precious" and "Up In The Air." Borowski wrote and produced the feature-length documentary, "Creature Feature: 60 Years of the Gill-Man", which featured Academy-Award Winner Benicio Del Toro and is narrated by 3-time Emmy-winner Keith David. Recently, Borowski produced the feature film, "A Place For Heroes," in Iowa starring the aforementioned Sorvino and Kellerman, among others, and also directed the film, "Maniac," a year later.`}</p></span>
          </div>

          <div className={`profileview__content__projects`}>
            <h5 className={`profileview__content__description__h5-3`}>{`Works by Samus`}</h5>
            <div className={`profileview__content__projects__content`}>
              <figure className={`profileview__content__projects__fig`}>
                <img className={`profileview__content__projects__fig--img`} src={`./img/test2.jpg`}/>
                <div className={`profileview__content__projects__fig--details`}>
                  <span>Name of project</span>
                </div>
              </figure>
              <figure className={`profileview__content__projects__fig`}>
                <img className={`profileview__content__projects__fig--img`} src={`./img/test2.jpg`}/>
                <div className={`profileview__content__projects__fig--details`}>
                  <span>Name of project</span>
                </div>
              </figure>
              <figure className={`profileview__content__projects__fig`}>
                <img className={`profileview__content__projects__fig--img`} src={`./img/test2.jpg`}/>
                <div className={`profileview__content__projects__fig--details`}>
                  <span>Name of project</span>
                </div>
              </figure>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default ProfileView;