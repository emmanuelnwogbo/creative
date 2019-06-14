import React, { Component, lazy, Suspense } from 'react';
import Hammer from 'hammerjs';

import '../scss/components/mediadisplay.scss'

class MediaDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: null,
      translateValue: null,
      swipedRight: false,
      mediaPlaying: false
    }
  }

  swipeRight = () => {
    const { 
      translateValue,
      currentId
    } = this.state;

    const { items } = this.props;
    const playingMedia = window.players.filter(player => player.playing);
    const fullscreenMedia = window.players.filter(player => player.fullscreen.active);

    if (playingMedia.length > 0 || fullscreenMedia.length > 0) {
      return;
    }

    if (!this.state.swipedRight && this.state.translateValue < items.length-1) {
      document.getElementById(`mediadisplay-${currentId}`).parentElement.style.transform = `translateX(-${translateValue}00%)`;
      Array.from(document.getElementsByClassName('mediadisplay__swipe__wrap--item')).forEach(item => {
        if (item.dataset.positioninslide !== '1') {
          item.firstChild.style.display = `none`;
        }

        if (item.dataset.positioninslide === '1') {
          item.firstChild.style.display = `block`;
        }
      })
      return this.setState({ swipedRight: true });
    }

    if (this.state.translateValue < items.length-1 && this.state.swipedRight) {
      return this.setState(prevState => ({ 
        translateValue: prevState.translateValue+=1
      }), () => {
        const { translateValue } = this.state;
        Array.from(document.getElementsByClassName('mediadisplay__swipe__wrap--item')).forEach(item => {
          if (item.dataset.positioninslide !== `${translateValue}`) {
            item.firstChild.style.display = `none`;
          }

          if (item.dataset.positioninslide === `${translateValue}`) {
            item.firstChild.style.display = `block`
          }
        })
        document.getElementById(`mediadisplay-${currentId}`).parentElement.style.transform = `translateX(-${translateValue}00%)`
      })
    }
  }

  swipeLeft = () => {
    const playingMedia = window.players.filter(player => player.playing);
    const fullscreenMedia = window.players.filter(player => player.fullscreen.active);

    if (playingMedia.length > 0 || fullscreenMedia.length > 0) {
      return;
    }

    if (this.state.translateValue === 1) {
      const { currentId } = this.state;
      this.setState({ swipedRight: false });
      Array.from(document.getElementsByClassName('mediadisplay__swipe__wrap--item')).forEach(item => {
        if (item.dataset.positioninslide !== `0`) {
          item.firstChild.style.display = `none`
        }

        if (item.dataset.positioninslide === `0`) {
          item.firstChild.style.display = `block`
        }
      })
      return document.getElementById(`mediadisplay-${currentId}`).parentElement.style.transform = `translateX(0)`;
    }

    if (this.state.swipedRight) {
      return this.setState(prevState => {
        return {
          translateValue: prevState.translateValue-=1
        }
      }, () => {
        const { currentId, translateValue } = this.state;
        Array.from(document.getElementsByClassName('mediadisplay__swipe__wrap--item')).forEach(item => {
          if (item.dataset.positioninslide !== `${translateValue}`) {
            item.firstChild.style.display = `none`
          }

          if (item.dataset.positioninslide === `${translateValue}`) {
            item.firstChild.style.display = `block`
          }
        })
        document.getElementById(`mediadisplay-${currentId}`).parentElement.style.transform = `translateX(-${translateValue}00%)`;
      })
    }
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
    const {
      items 
    } = this.props;
    console.log(items)
    this.setState({ 
      currentId: items[0].props.id,
      translateValue: 1,
      swipedRight: false 
    }, () => {
      window.addEventListener('keydown', this.initControls, true);
    })

    if (window.matchMedia("screen and (max-width: 1024px)").matches) {
      const mediaDisplay = document.querySelector('.mediadisplay');
      const manager = new Hammer.Manager(mediaDisplay);
      const Swipe = new Hammer.Swipe();
      let range = 0;
      manager.add(Swipe)
      manager.on('swipe', (e) => {
      let direction = e.offsetDirection;
      if (direction === 4 || direction === 2) {
        if (e.deltaX > range) {
          this.swipeLeft()
        }

        if (e.deltaX < range) {
          this.swipeRight();
        }
      }
    });
  }    
  }

  componentWillUnmount() {
    const { currentId } = this.state;
    window.removeEventListener('keydown', this.initControls, true);
    document.getElementById(`mediadisplay-${currentId}`).parentElement.style.transform = `translateX(0)`;
    this.reset();
  }

  reset = () => {
    this.setState({
      translateValue: 1,
      swipedRight: false
    })
  }

  renderItems = () => {
    const { items } = this.props;
    if (items && this.state.translateValue) {
      let num = 0;
      return items.map(item => {
        num+=1;
        return (
          <div 
          className={`mediadisplay__swipe__wrap--item`}
          data-positioninslide={`${num-1}`}
          id={`mediadisplay-${item.props.id}`}
          key={item.props.id}>{item}</div>
        )
      })
    }
  }

  render() {
    return (
      <div id={'mediadisplay__swiper'}  className={`mediadisplay`}>
        <div className={`mediadisplay__swipe`}>
          <div className={'mediadisplay__swipe__wrap'} 
          style={{
            transition: `all .1s ease-in-out`
          }}>
            {this.renderItems()}
          </div>
        </div>
      </div>
    )
  }
}

export default MediaDisplay;