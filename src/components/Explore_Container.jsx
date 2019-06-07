import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';

import '../scss/components/explore_container.scss'
import rainbowGenerator from '../helpers/rainbow';

const Card = lazy(() => import('./Card'));


class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 'Explore',
      results: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 
        13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]
    }
  }

  renderResultCards = () => {
    const { results } = this.state;
    return results.map(result => {
      return ( 
        <Suspense fallback={
          <div style={{
            background: 'rgba(0, 0, 0, 0.1)',
            borderRadius: '.5rem'
          }}>
            <div style={{
              height: '20rem',
            }}></div>
            <div style={{
              padding: '2rem 1rem'
            }}></div>
          </div>
        } key={result}>
          <Card toggleVideoGifPhotoViewVisibility={this.props.toggleVideoGifPhotoViewVisibility} />
        </Suspense>
      );
    });
  }


  renderSubHeader = () => {
    return (
      <p className="explore__container__header--label-sub">{'Gifs, Videos, and Art by awesome and creative people'}</p>
    )
  }

  renderHeader = (label) => {
    return (
      <div className="explore__container__header">
      <div className="explore__container__header--label">
        <p className="explore__container__header--label-main">{label}</p>
        {this.renderSubHeader()}
      </div>
    </div>
    )
  }

  render() {
    const {
      toggleProfileViewVisibility,
      toggleJobViewVisibility,
      label
    } = this.props;
    
    if (label === 'Home') {
      return (
        <div className="explore__container">
          {this.renderHeader(`Explore`)}
          {this.renderResultCards()}
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  const { menuReducer } = state;
  return {
    label: menuReducer.label
  }
}

export default connect(mapStateToProps)(Container);