import React, { Component, lazy, Suspense } from 'react';

import '../scss/components/mediadisplay.scss'

class MediaDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId: 1,
      swipedRight: false
    }
  }

  swipeRight = () => {
    const { 
      currentId
    } = this.state;

    const { items } = this.props;

    if (!this.state.swipedRight && this.state.currentId < items.length-1) {
      document.getElementById(`mediadisplay-${currentId}`).parentElement.style.transform = `translateX(-${currentId}00%)`;
      return this.setState({ swipedRight: true });
    }

    if (this.state.currentId < items.length-1 && this.state.swipedRight) {
      return this.setState(prevState => ({ 
        currentId: prevState.currentId+=1
      }), () => {
        const { currentId } = this.state;
        document.getElementById(`mediadisplay-${currentId}`).parentElement.style.transform = `translateX(-${currentId}00%)`
      })
    }
  }

  swipeLeft = () => {
    const { 
      currentId
    } = this.state;

    if (this.state.currentId === 1) {
      this.setState({ swipedRight: false });
      return document.getElementById(`mediadisplay-${currentId}`).parentElement.style.transform = `translateX(0)`
    }

    if (this.state.swipedRight) {
      return this.setState(prevState => {
        return {
          currentId: prevState.currentId-=1
        }
      }, () => {
        const { currentId } = this.state;
        document.getElementById(`mediadisplay-${currentId}`).parentElement.style.transform = `translateX(-${currentId}00%)`
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
    const { mediaDisplaySwiperParent } = this.props;
    const targetNode = document.getElementById(mediaDisplaySwiperParent);
    const observer = new MutationObserver(() => {
      if (targetNode.style.display === 'none') {
        window.removeEventListener('keydown', this.initControls, true);
        this.setState({ 
          currentId: 1,
          swipedRight: false 
        }, () => {
          const { currentId } = this.state;
          document.getElementById(`mediadisplay-${currentId}`).parentElement.style.transform = `translateX(0)`
        })
      }

      if (targetNode.style.display !== 'none') {
        window.addEventListener('keydown', this.initControls, true);
      }
    });
    observer.observe(targetNode, { attributes: true, childList: true });
  }

  renderItems = () => {
    const { items } = this.props;
    let id = 0;
    if (items) {
      return items.map(item => {
        id+=1;
        return (
          <div 
          className={'mediadisplay__swipe__wrap--item'}
          id={`mediadisplay-${id}`}
          key={id}>{item}</div>
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