import React, { Component } from 'react';
import '../scss/components/jumbotron.scss';

class Jumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className={`jumbotron`}>
        <div className={`jumbotron__firsthalf`}>
          <div className={`jumbotron__firsthalf__mast`}>
            <div className={`jumbotron__firsthalf__mast--p1`}><p>Meet and collaborate with creatives and service 
            providers<span className={`jumbotron__firsthalf__mast--p1-span`}>in the creative industry</span></p></div>
            <div className={`jumbotron__firsthalf__mast--p2`}><p>Let's get</p></div>
            <div className={`jumbotron__firsthalf__mast--p3`}><h1>Creative</h1></div>
            <div className={`jumbotron__firsthalf__mast--btns`}>
              <span className={`jumbotron__firsthalf__mast--btns-btn`}>Sign up now</span>
              <span className={`jumbotron__firsthalf__mast--btns-btn`}>learn more</span>
            </div>
          </div>
        </div>
        <div className={`jumbotron__secondhalf`}>
          <figure className={`jumbotron__secondhalf__fig`}>
            <img className={`jumbotron__secondhalf__img`} src={`https://res.cloudinary.com/dxlhzerlq/image/upload/q_33/v1559594290/female-actress_kr0c1r.jpg`}/>
          </figure>
          <figure className={`jumbotron__secondhalf__fig`}>
            <img className={`jumbotron__secondhalf__img`} src={`https://res.cloudinary.com/dxlhzerlq/image/upload/q_56/v1559594269/girl-with-hair_kaeg66.jpg`}/>
          </figure>
          <figure className={`jumbotron__secondhalf__fig`}>
            <img className={`jumbotron__secondhalf__img`} src={`https://res.cloudinary.com/dxlhzerlq/image/upload/q_56/v1559594352/girl-glasses_sm1hfi.jpg`}/>
          </figure>
          <figure className={`jumbotron__secondhalf__fig`}>
            <img className={`jumbotron__secondhalf__img`} src={`https://res.cloudinary.com/dxlhzerlq/image/upload/q_59/v1559594210/black-boy_ydtwkv.jpg`}/>
          </figure>
          <figure className={`jumbotron__secondhalf__fig`}>
            <img className={`jumbotron__secondhalf__img`} src={`https://res.cloudinary.com/dxlhzerlq/image/upload/q_53/v1559594251/camera-1_hqcuwp.jpg`}/>
          </figure>
        </div>
      </div>
    )
  }
}

export default Jumbotron