import React, { Component } from 'react';

import '.././scss/components/header_mobile.scss';

class Header_Modile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBarStyle: {
        transform: 'translateY(-100%)'
      },
      searchOpenStyle: {
        transform: 'translateY(0)'
      }
    }
  }
  
    
  openSearchBar = () => {
    this.setState({ 
      searchBarStyle: {
        transform: 'translateY(0)'
      },
      searchOpenStyle: {
        transform: 'translateY(-200%)'
      }
    })
  }

  closeSearchBar = () => {
    this.setState({ 
      searchBarStyle: {
        transform: 'translateY(-100%)'
      },
      searchOpenStyle: {
        transform: 'translateY(0)'
      }
    })
  }

  render() {
    return (
      <div className="header__mobile">
        <div className="header__mobile--burger" style={this.state.searchOpenStyle}>
          <span className="header__mobile--burger-span"></span>
          <span className="header__mobile--burger-span"></span>
          <span className="header__mobile--burger-span"></span>
          <span className="header__mobile--burger-span"></span>
        </div>

        <div className="header--name" style={this.state.searchOpenStyle}>
          <p>HomeBoard</p>
        </div>

        <div className="header__mobile--icon-parent" onClick={this.openSearchBar} style={this.state.searchOpenStyle}>
          <svg  className="header__mobile--icon-search header__svgs--svg">
            <use xlinkHref="./img/sprite.svg#icon-search" />
          </svg>
        </div>

        <div className="header__mobile--search" style={this.state.searchBarStyle}>
          <span className="header__mobile--search-iconparent" onClick={this.closeSearchBar}>
            <svg  className="header__mobile--search-closeicon">
              <use xlinkHref="./img/sprite.svg#icon-x" />
            </svg>
          </span>
          <input className="header__mobile--search-input" placeholder="Search"/>
        </div>

        <div className="header__mobile--svgs" style={this.state.searchOpenStyle}>
          <span className="header__svgs--body">
            <svg className="header__svgs--svg" viewBox="0 0 500 500">
              <path d="M250 500c28.1875 0 51.25-23.076923 51.25-51.282051h-102.5C198.75 476.923077 221.8125 500 250 500zm153.75-153.846154V217.948718c0-78.717949-41.76875-144.6153847-115.3125-162.0512821V38.4615385C288.4375 17.1794872 271.26875 0 250 0s-38.4375 17.1794872-38.4375 38.4615385v17.4358974C138.275 73.3333333 96.25 138.974359 96.25 217.948718v128.205128L45 397.435897v25.641026h410v-25.641026l-51.25-51.282051zm-51.25 25.641026h-205V217.948718c0-63.589744 38.69375-115.384615 102.5-115.384615s102.5 51.794871 102.5 115.384615v153.846154z">
              </path>
            </svg>
          </span>
        </div>
      </div>
    )
  }
}

export default Header_Modile;