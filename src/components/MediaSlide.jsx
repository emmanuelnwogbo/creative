import React, { Component, lazy, Suspense } from 'react';
import '../scss/components/mediaslide.scss';

const PhotoDisplay = lazy(() => import('./PhotoDisplay'));
const VideoDisplay = lazy(() => import('./VideoDisplay'))

class MediaSlide extends Component {
  constructor(props) {
    super(props)
    this.state = {
      assets: [],
      currentItem: 0,
      swipeDirection: null
    }
  }

  renderMedia = () => {
    const { assets, currentItem } = this.state;
    const v = /video/
    return assets.map(asset => {
      if (assets.indexOf(asset) === currentItem && 
      v.exec(asset.filetype) !== null) {
        return (
          <Suspense key={asset.src} fallback={<div>loading</div>}>
            <VideoDisplay key={asset.src} id={asset.src}/>
          </Suspense>
        )
      }

      if (assets.indexOf(asset) === currentItem) {
        return (
          <Suspense key={asset.src} fallback={<div>loading</div>}>
            <PhotoDisplay 
            key={asset.src} 
            src={asset.src} 
            swipeDirection={this.state.swipeDirection}/>
          </Suspense>
        )
      }
    })
  }

  swipeRight = () => {
    const { assets, currentItem } = this.state;
    if (window.player !== undefined && window.player !== null) {
      if (window.player.playing || window.player.fullscreen.active) {
        return;
      }
    }

    if (currentItem === assets.length-1) {
      return;
    }

    return this.setState(prevState => {
      return {
        currentItem: prevState.currentItem+=1
      }
    })
  }

  swipeLeft = () => {
    const { currentItem } = this.state;
    if (window.player !== undefined && window.player !== null) {
      if (window.player.playing || window.player.fullscreen.active) {
        return;
      }
    }

    if (currentItem === 0) {
      return;
    }

    return this.setState(prevState => {
      return {
        currentItem: prevState.currentItem-=1
      }
    })
  }

  initControls = (event) => {
    if (event.key === `ArrowRight`) {
      this.swipeRight();
    }

    if (event.key === `ArrowLeft`) {
      this.swipeLeft()
    }

    //add media queries to initialise swipe functionality for mobile here
  }

  componentDidMount() {
    const { assets } = this.props;
    //console.log(assets)
    /*assets.forEach(asset => {
      console.log(typeof asset)
    })*/
    const setOfUniqueItems = new Set(assets);
    setOfUniqueItems.forEach(currentVal => {
      this.setState(prevState => {
        return {
          assets: [
            ...prevState.assets, currentVal
          ]
        }
      })
    });

    window.addEventListener('keydown', this.initControls, true);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.initControls, true);
  }

  render() {
    const { renderMedia } = this;
    return (
      <div className={`mediaslide`}>
        {renderMedia()}
      </div>
    )
  }
}

export default MediaSlide;