import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../scss/components/signinform.scss';

import { btnClickHandler } from '../actions';
import Button from './Button'

const socialBtnLabel = (sprite, label) => {
  if (label === 'LinkedIn') {
    return (
      <span>
        <svg  className="btn__social--icon btn__social--icon--LinkedIn">
          <use xlinkHref={sprite} />
        </svg>
        <span>{label}</span>
      </span>
    )
  }
  return (
    <span>
      <svg  className="btn__social--icon">
        <use xlinkHref={sprite} />
      </svg>
      <span>{label}</span>
    </span>
  )
}

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginOptions: ['Google', 'LinkedIn'],
      style: {
        zIndex: '-1',
        opacity: '0'
      }
    }
  }

  renderLoginBtns = () => {
    const { loginOptions } = this.state;
    return loginOptions.map(item => {
      if (item === 'Google') {
        return <Button key={item} label={socialBtnLabel("./img/sprite.svg#icon-google1", 'Google')} classLabels={'btn btn__social btn__social--google'}/>
      }

      if (item === 'LinkedIn') {
        return <Button key={item} label={socialBtnLabel("./img/sprite.svg#icon-linkedin", 'LinkedIn')} classLabels={'btn btn__social'}/>
      }
    })
  }

  closeSelf = (e) => {
    if (e.target.id === 'signinform' || 
        e.target.id === 'signinform--close') {
      const { btnClickHandler, userAccountStat } = this.props;
      btnClickHandler(userAccountStat, false)
    }
  }

  render() {
    const { signInFormVisible } = this.props;
    //console.log(signInFormVisible)
    return (
      <div className="signinform" onClick={this.closeSelf} style={signInFormVisible} id="signinform">
        <div className="signinform__content">
          <span className="signinform__close">
            <span id="signinform--close" style={{
              position: 'absolute',
              zIndex: '1000',
              cursor: 'pointer',
              background: 'transparent',
              height: '100%',
              width: '100%',
              top: '0',
              left: '0'
            }}></span>
            <svg  className="signinform__close--icon">
              <use xlinkHref="./img/sprite.svg#icon-x" />
            </svg>
          </span>
          <figure className="signinform__fig">
            <img src="https://images.pexels.com/photos/1414992/pexels-photo-1414992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="signinform__fig--img"/>
          </figure>
          <div className="signinform__content--signin">
            <h2 className="signinform__content--h2">Create an account or login</h2>
            <h3 className="signinform--h3" style={{textAlign: 'start'}}>Sign in with a secure link</h3>
            <form className="signinform__input">
              <input className="signinform__input--email" type="email" name="email" id="email" placeholder="Enter your email address" required></input>
              <input className="btn btn__signup" type="button" value="SIGN UP / SIGN IN"></input>
            </form>
            <div className="signinform--btns">
              <h3 className="signinform--h3">Or sign in with:</h3>
              {this.renderLoginBtns()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { userAccountStat, signInFormVisible } = state;
  return {
    userAccountStat,
    signInFormVisible
  }
}

export default connect(mapStateToProps, { btnClickHandler })(SignInForm);