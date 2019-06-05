import React, { Component, lazy, Suspense } from 'react';

import Header from './Header';
import Container from './Container';
import SignInForm from './SignInForm';
const Jumbotron = lazy(() => import('./Jumbotron'));
const VideoGifPhotoView = lazy(() => import('./VideoGifPhotoView'))

//import FormField, CommentField components for development purposes
import FormField from './FormField';
import CommentField from './CommentField';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeVideoGifPhotoViewVisibility: 'none'
    }
  }

  toggleVideoGifPhotoViewVisibility = (e) => {
    const { changeVideoGifPhotoViewVisibility } = this.state;
    if (changeVideoGifPhotoViewVisibility === 'none') {
      return this.setState({ 
        changeVideoGifPhotoViewVisibility: `block` 
      }, () => {
        document.getElementsByTagName('body')[0].style.overflowY = `hidden`;
      })
    }

    if (e.target.classList.contains('videogifphotoview')) {
      return this.setState({
        changeVideoGifPhotoViewVisibility: 'none' 
       }, () => {
         document.getElementsByTagName('body')[0].style.overflowY = `scroll`;
       })
    }
  }

  render() {
    const { changeVideoGifPhotoViewVisibility } = this.state;
    const { toggleVideoGifPhotoViewVisibility } = this;
    return (
      <div className="home">
        <Header />
        <Suspense fallback={<div>loading</div>}>
          <Jumbotron/>
        </Suspense>
        <Container toggleVideoGifPhotoViewVisibility={this.toggleVideoGifPhotoViewVisibility}/>
        <form>
          <FormField type="text" name="Firstname" placeholder={'Firstname'}/>
          <FormField type="email" name="Email" placeholder={'Put your email here'}/>
          <FormField type="password" name="Password" placeholder={'Choose a password'} required={true}/>
          <FormField type="text" name="Profession" placeholder={'Choose a color'} dropdownMenu={['black', 'white', 'pink', 'red', 'purple']}/>
        </form>
        <div style={{
          width: `40rem`,
          margin: `4rem auto`
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
        <Suspense fallback={<div>loading</div>}>
          <VideoGifPhotoView 
            changeVideoGifPhotoViewVisibility={changeVideoGifPhotoViewVisibility} 
            toggleVideoGifPhotoViewVisibility={toggleVideoGifPhotoViewVisibility}
            mediaType={null}/>
        </Suspense>
      </div>
    )
  }
}

export default Home; 