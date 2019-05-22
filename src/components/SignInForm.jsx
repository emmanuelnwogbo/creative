import React, { Component } from 'react';
import '../scss/components/signinform.scss';

import Button from './Button'

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginOptions: ['Google', 'LinkedIn']
    }
  }

  renderLoginBtns = () => {
    const { loginOptions } = this.state;
    return loginOptions.map(item => {
      if (item === 'Google') {
        return <Button key={item} label={item} style={{
          background: '#fff', 
          margin: '2rem',
          fontSize: '2rem',
          height: '5.5rem',
          minWidth: '14rem',
          color: '#000000',
          textTransform: 'none'
        }}/>
      }

      if (item === 'LinkedIn') {
        return <Button key={item} label={item} style={{
          background: '#0077B5', 
          margin: '2rem',
          fontSize: '2rem',
          height: '5.5rem',
          minWidth: '14rem',
          textTransform: 'none'
        }}/>
      }
    })
  }

  render() {
    return (
      <div className="signinform">
        <div className="signinform__content">
          <figure className="signinform__fig">
            <img src="https://images.pexels.com/photos/1414992/pexels-photo-1414992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="signinform__fig--img"/>
          </figure>
          <div className="signinform__content--signin">
            <h2 className="signinform__content--h2">Create an account or login</h2>
            <form className="signinform__input">
              <input className="signinform__input--email" type="email" name="email" id="email" placeholder="Enter your email address" required></input>
              <input className="signinform__input--btn" type="button" value="SIGN UP / SIGN IN"></input>
            </form>
            <div className="signinform--btns">
              {this.renderLoginBtns()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignInForm;