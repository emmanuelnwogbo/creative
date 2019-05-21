import React, { Component } from 'react';
import '../scss/components/header.scss';

import Btn from './Button';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      menuCursorPosition: '0',
      currentMenuItem: 'All',
      menuItems: ['All', 'Videos', 'Gifs', 'Tracks', 'Profiles'],
      btnLabels: ['create', 'sign in']
    }
  }

  moveMenuCursor = (e) => {
    const { menuCursorPosition } = this.state;
    const menuLabel = e.target.childNodes[0].innerText || e.target.innerText;
    switch (menuLabel) {
      case 'Videos':
        this.setState({ 
          menuCursorPosition: 'translateX(7.5rem)',
          currentMenuItem: menuLabel
        });
        break;
      case 'Gifs':
        this.setState({ 
          menuCursorPosition: 'translateX(16rem)',
          currentMenuItem: menuLabel
        });
        break;
      case 'Tracks':
        this.setState({ 
          menuCursorPosition: 'translateX(24rem)',
          currentMenuItem: menuLabel 
        });
        break;
      case 'Profiles':
        this.setState({ 
          menuCursorPosition: 'translateX(33.5rem)',
          currentMenuItem: menuLabel 
        });
        break;
      default:
        this.setState({ 
          menuCursorPosition: 'translateX(0)',
          currentMenuItem: menuLabel 
        });
    }
  }

  renderMenuItems = () => {
    const { menuItems, currentMenuItem } = this.state;
    return menuItems.map(item => {
      if (item === currentMenuItem) {
        return (
          <span className="header__menu--item header__menu--currentitem" 
          onClick={this.moveMenuCursor} 
          key={item}>
            <p>{item}</p>
          </span>
        )
      }
      return (
        <span className="header__menu--item" 
        onClick={this.moveMenuCursor} 
        key={item}>
          <p>{item}</p>
        </span>
      )
    })
  }

  renderBtns = () => {
    const { btnLabels } = this.state;
    return btnLabels.map(item => {
      return <Btn style={{
        height: '4.5rem'
      }} label={item} key={item}/>
    })
  }

  render() {
    const { menuCursorPosition } = this.state;
    return (
      <div className="header">
        <div className="header--name">
          <p>HomeBoard</p>
        </div>
        <div className="header__search">
          <input className="header__search--input" placeholder="Search"/>
          <svg  className="header__search--icon">
            <use xlinkHref="./img/sprite.svg#icon-search" />
          </svg>
        </div>
        <div className="header__menu">
          <span className="header__menu--cursor" style={{
            transform: menuCursorPosition
          }}></span>
          {this.renderMenuItems()}
        </div>
        <div className="header__svgs">
          <span className="header__svgs--body">
            <svg className="header__svgs--svg" viewBox="0 0 500 500">
              <path d="M250 500c28.1875 0 51.25-23.076923 51.25-51.282051h-102.5C198.75 476.923077 221.8125 500 250 500zm153.75-153.846154V217.948718c0-78.717949-41.76875-144.6153847-115.3125-162.0512821V38.4615385C288.4375 17.1794872 271.26875 0 250 0s-38.4375 17.1794872-38.4375 38.4615385v17.4358974C138.275 73.3333333 96.25 138.974359 96.25 217.948718v128.205128L45 397.435897v25.641026h410v-25.641026l-51.25-51.282051zm-51.25 25.641026h-205V217.948718c0-63.589744 38.69375-115.384615 102.5-115.384615s102.5 51.794871 102.5 115.384615v153.846154z">
              </path>
            </svg>
          </span>
        </div>
        <div className="header--btns">
          {this.renderBtns()}
        </div>
      </div>
    )
  }
}

export default Header;