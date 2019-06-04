import React, { Component } from 'react';
import '../scss/components/header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appname: `Appname`,
      searchInputOpen: false
    }
  }

  openCloseSearch = () => {
    const { searchInputOpen } = this.state;
    if (!searchInputOpen) {
      return this.setState({ searchInputOpen: true });
    }

    return this.setState({ searchInputOpen: false });
  }

  renderHeaderContents = () => {
    const { searchInputOpen, appname } = this.state;
    if (searchInputOpen) {
      return (
        <div className={`header header__searchopen`}>
          <span className={`header__searchopen--closeicon`} onClick={this.openCloseSearch}>
            <svg className={`header__searchopen--svg`}>
              <use xlinkHref="./img/sprite.svg#icon-cross" />
            </svg>
          </span>
          <input className={`header__searchopen--input`} placeholder={`Search`}/>
        </div>
      )
    }

    return (
      <div className={`header`}>
        <div className={`header__appname`}>
          <p>{appname}</p>
        </div>
        <div className={`header__search`} onClick={this.openCloseSearch}>
          <svg className={`header__search--searchicon`}>
            <use xlinkHref="./img/sprite.svg#icon-search" />
          </svg>
        </div>
        <div className={`header__menu`}>
          <span className={`header__menu--item`}>Explore</span>
          <span className={`header__menu--item`}>People</span>
          <span className={`header__menu--item`}>Projects</span>
          <span className={`header__menu--item`}>Jobs</span>
          <span className={`header__menu--item`}>Create</span>
          <span className={`header__menu--item header__menu--item-btn`}>Sign Up/Login</span>
        </div>
      </div>
    )
  }

  render() {
    return this.renderHeaderContents()
  }
}

export default Header;