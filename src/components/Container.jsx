import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';

import '../scss/components/container.scss'
import rainbowGenerator from '../helpers/rainbow';

const Card = lazy(() => import('./Card'));
const Profile = lazy(() => import('./Profile'));
const Project = lazy(() => import('./Project'));
const Job = lazy(() => import('./Job'))


class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 'Home',
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
          <Card overlayStyle={
            rainbowGenerator(
              Math.round(Math.random() * 100), 
              Math.round(Math.random() * 80)
            )}/>
        </Suspense>
      );
    });
  }

  renderProfileCardsOnly = () => {
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
          <Profile />
        </Suspense>
      )
    })
  }

  renderProjectCardsOnly = () => {
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
          <Project />
        </Suspense>
      )
    })
  }

  renderSubHeader = (label) => {
    if (label === 'Profiles') {
      return (
        <p className="container__header--label-sub">Network and Collaborate with awesome and creative people</p>
      )
    }

    return (
      <p className="container__header--label-sub">{'Gifs, Videos, and Art by awesome and creative people'}</p>
    )
  }

  renderHeader = (label) => {
    return (
      <div className="container__header">
      <div className="container__header--label">
        <p className="container__header--label-main">{label}</p>
        {this.renderSubHeader(label)}
      </div>
    </div>
    )
  }

  render() {
    console.log(this.props.label)
    const { label } = this.props;
    if (label === 'Home') {
      return (
        <div className="container">
          {this.renderHeader(label)}
          {this.renderResultCards()}
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
          }>
            <Profile />
          </Suspense>
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
          }>
            <Job />
          </Suspense>
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
          }>
            <Job previewMedia={"./img/project.jpg"}/>
          </Suspense>
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
          }>
            <Project />
          </Suspense>
        </div>
      )
    }

    if (label === 'Tracks') {
      return (
        <div className="container">
          {this.renderHeader(label)}
        </div>
      )
    }

    if (label === 'Profiles') {
      return (
        <div className="container">
          {this.renderHeader(label)}
          {this.renderProfileCardsOnly()}
        </div>
      )
    }

    if (label === 'Projects') {
      return (
        <div className="container">
          {this.renderHeader(label)}
          {this.renderProjectCardsOnly()}
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