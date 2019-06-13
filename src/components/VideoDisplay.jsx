import React, { Component, lazy, Suspense } from 'react';

class VideoDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    const player = new Plyr('video', {captions: {active: true}});
    window.player = player;
  }

  render() {
    return (
      <div>
        <video controls crossOrigin="true" playsInline poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg">
		      <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" type="video/mp4" size="576" />
			    <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4" type="video/mp4" size="720" />
			    <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4" type="video/mp4" size="1080" />
			    <a href="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4" download>Download</a>
	      </video>
      </div>
    )
  }
}

export default VideoDisplay;