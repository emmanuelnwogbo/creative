import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../scss/components/project.scss';

class Project extends Component {
  constructor(props) {
    super(props) ;
    this.state = {
      people: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      photos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20
      ],
    }
  }

  renderPeopleInvolved = () => {
    const { people } = this.state;
    let tracker = 1;
    return people.map(person => {
      if (people[0] === person) {
        return (
          <figure key={person} className="project__middle__people--fig">
            <img src="./img/me.png" className="project__middle__people--img"/>
          </figure>
        )
      }

      if (people[1] === person) {
        return (
          <figure key={person} style={{
            transform: `translatex(${tracker*(-1.7)}rem)`
          }} className="project__middle__people--fig">
            <img src="./img/me.png" className="project__middle__people--img"/>
          </figure>
        )
      }

      tracker+=1;
      return (
        <figure key={person} style={{
          transform: `translatex(${tracker*(-1.7)}rem)`
        }} className="project__middle__people--fig">
          <img src="./img/me.png" className="project__middle__people--img"/>
        </figure>
      )
    })
  }

  renderPhotosPreviews = () => {
    const { photos } = this.state;
    return photos.map(photo => {
      if (photos[0] === photo) {
        return (
          <figure key={photo} className="project__bottom--gallery-fig">
            <img src="./img/project.jpg" className="project__bottom--gallery-img"/>
          </figure>
        )
      }
      return (
        <figure key={photo} className="project__bottom--gallery-fig">
          <img src="./img/test2.jpg" className="project__bottom--gallery-img"/>
        </figure>
      )
    })
  }

  render() {
    const { photos } = this.state;
    return (
      <div className="project">
        <div className="project__top">
          <figure className="project__top--fig">
            <div className="project--type">
              <p>{`project`}</p>
            </div>
            <img className="project__top--img" src="./img/project.jpg"/>
          </figure>
        </div>
        <div className="project__middle">
          <div className="project__middle--buttons">
            <span className="project__middle--buttons-btn-svg">
              <p>Follow</p>
            </span>
            <span className="project__middle--buttons-btn">
              <p>Join this project</p>
            </span>
          </div>
          <h3 className="project__middle--h3">The Coast of Love</h3>
          <div className="project__middle--bio">
            <p>We're making a short film that describes the 
            state of love during the me too era, pls feel free to check out our preview. 
            The beauty van be found anywhere proverb is not a myth indeed.</p>
          </div>
          <div className="project__middle__people">
            <h4 className="project__middle__people--h4">People involved in this Project</h4>
            <div className="project__middle__people--photos">
              {this.renderPeopleInvolved()}
            </div>
          </div>
        </div>

        <div className="project__bottom">
          <h5 className="project__bottom--h5"><span>{photos.length}</span>media files</h5>
          <div className="project__bottom--gallery">
            {this.renderPhotosPreviews()}
          </div>
        </div>
      </div>
    )
  }
}

export default Project;