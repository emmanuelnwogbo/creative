import React, { Component, lazy, Suspense } from 'react';

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

    if (playingMedia.length > 0) {
      return;
    }

    if (!this.state.swipedRight && this.state.translateValue < items.length-1) {
      document.getElementById(`mediadisplay-${currentId}`).parentElement.style.transform = `translateX(-${translateValue}00%)`;
      return this.setState({ swipedRight: true });
    }

    if (this.state.translateValue < items.length-1 && this.state.swipedRight) {
      return this.setState(prevState => ({ 
        translateValue: prevState.translateValue+=1
      }), () => {
        const { translateValue } = this.state;
        document.getElementById(`mediadisplay-${currentId}`).parentElement.style.transform = `translateX(-${translateValue}00%)`
      })
    }
  }

  swipeLeft = () => {
    const {
      currentId
    } = this.state;

    const playingMedia = window.players.filter(player => player.playing);

    if (playingMedia.length > 0) {
      return;
    }

    if (this.state.translateValue === 1) {
      this.setState({ swipedRight: false });
      return document.getElementById(`mediadisplay-${currentId}`).parentElement.style.transform = `translateX(0)`;
    }

    if (this.state.swipedRight) {
      return this.setState(prevState => {
        return {
          translateValue: prevState.translateValue-=1
        }
      }, () => {
        const { currentId, translateValue } = this.state;
        document.getElementById(`mediadisplay-${currentId}`).parentElement.style.transform = `translateX(-${translateValue}00%)`
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
    this.setState({ 
      currentId: items[0].props.id,
      translateValue: 1,
      swipedRight: false 
    }, () => {
      window.addEventListener('keydown', this.initControls, true);
    })
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
    if (items) {
      return items.map(item => {
        return (
          <div 
          className={'mediadisplay__swipe__wrap--item'}
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