import React, { Component, lazy, Suspense } from 'react';
import '../scss/components/video.scss'

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className={`video`}>
        video here
      </div>
    )
  }
}

export default Video;