import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';

import '../scss/components/container.scss'
import rainbowGenerator from '../helpers/rainbow';

const Card = lazy(() => import('./Card'));
const Project = lazy(() => import('./Project'));


class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerLabel: 'Home',
      results: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
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
          <Card overlayStyle={
            rainbowGenerator(
              Math.round(Math.random() * 100), 
              Math.round(Math.random() * 80)
            )}/>
        </Suspense>
      );
    });
  }

  render() {
    const { headerLabel } = this.state;
    //console.log(this.props)
    return (
      <div className="container">
        <div className="container__header">
          <div className="container__header--label">
            <p className="container__header--label-main">{headerLabel}</p>
            <p className="container__header--label-sub">{'Gifs, Videos, and Art by awesome and creative people'}</p>
          </div>
        </div>
        {this.renderResultCards()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { menu } = state;
  return {
    menu
  }
}

export default connect(mapStateToProps, {  })(Container);