import React, { Component } from 'react';

import Header from './Header';
import Container from './Container';
import SignInForm from './SignInForm';

//import FormField, CommentField components for development purposes
import FormField from './FormField';
import CommentField from './CommentField';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MobileHeader: false
    }
  }

  rendermobileHeader = () => {
    const { MobileHeader } = this.state;
    if (MobileHeader) {
      return <MobileHeader />
    }

    return;
  }

  componentDidMount() {
    if (window.matchMedia('(max-width: 1049px)').matches) {
      import('./Header_Mobile').then(HeaderMobile => {
        this.setState({ MobileHeader: HeaderMobile.default });
      })
    }
  }

  render() {
    return (
      <div className="home">
        {this.rendermobileHeader()}
        <SignInForm />
        <Header />
        <Container />
        <form>
          <FormField type="text" name="Firstname" placeholder={'Firstname'}/>
          <FormField type="email" name="Email" placeholder={'Put your email here'}/>
          <FormField type="password" name="Password" placeholder={'Choose a password'} required={true}/>
          <FormField type="text" name="Profession" placeholder={'Choose a color'} dropdownMenu={['black', 'white', 'pink', 'red', 'purple']}/>
        </form>
        <div style={{
          width: `40rem`,
          margin: `2rem auto`
        }}>
          <CommentField 
          include_socialIcons={true}
          media={'./img/br.gif'}
          user_photo={'./img/me.png'} 
          user_name={`Noah Thomas`}
          comment_time={`20 Minutes Ago`}
          user_comment={`We're making a short film that describes the 
          state of love during the me too era, pls feel free to check out our preview. 
          The beauty van be found anywhere proverb is not a myth indeed.`}/>
        </div>
      </div>
    )
  }
}

export default Home; 