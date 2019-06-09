import React, { Component, lazy, Suspense } from 'react';
import '../scss/components/video.scss'

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    const { id } = this.props;
    let player = new Plyr(`#${id}`);
    player.Creative__UuuuId = id;
    window.players = [...window.players, player];
    console.log(window.players);
  }


  componentWillUnmount() {
    window.players = []
  }

  render() {
    const { id } = this.props;
    return (
      <div className={`video`}>
        <Suspense fallback={<div>loading</div>}>
          <video id={id} className={`video__player`} controls crossOrigin="true" playsInline poster={`https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg`}>
            <source src={`https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4`} type="video/mp4" size="576" />
            <source src={`https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4`} type="video/mp4" size="720" />
            <source src={`https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4`} type="video/mp4" size="1080" />
          </video>
        </Suspense>
      </div>
    )
  }
}

export default Video;