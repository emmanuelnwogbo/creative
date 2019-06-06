import React, { Component, lazy, Suspense } from 'react';

import Header from './Header';
import Container from './Container';
import SignInForm from './SignInForm';
const Jumbotron = lazy(() => import('./Jumbotron'));
const VideoGifPhotoView = lazy(() => import('./VideoGifPhotoView'))
const Project = lazy(() => import('./Project'));
const ProfileView = lazy(() => import('./ProfileView'));

//import FormField, CommentField components for development purposes
import FormField from './FormField';
import CommentField from './CommentField';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoGifPhotoViewVisibility: 'none',
      profileViewVisibility: 'none'
    }
  }

  toggleProfileViewVisibility = (e) => {
    const { profileViewVisibility } = this.state;
    if (e.target.classList.contains('profile__top--btn') || 
        e.target.classList.contains('profile__top--btn-svg') ||
        e.target.classList.contains('profile__top--btn-body') ||
        e.target.classList.contains('profile__top--btn-text')) {
          return;
    }

    if (e.target.classList.contains('profile__save--btn') || 
        e.target.classList.contains('profile__save--btn-svg') ||
        e.target.classList.contains('profile__save--span') ||
        e.target.classList.contains('profile__save--text')) {
          return;
    }

    if (profileViewVisibility === 'none') {
      return this.setState({ 
        profileViewVisibility: `block` 
      }, () => {
        document.getElementsByTagName('body')[0].style.overflowY = `hidden`;
      })
    }

    if (e.target.classList.contains('profileview')) {
      return this.setState({
        profileViewVisibility: 'none' 
       }, () => {
         document.getElementsByTagName('body')[0].style.overflowY = `scroll`;
       })
    }
  }

  toggleVideoGifPhotoViewVisibility = (e) => {
    const { videoGifPhotoViewVisibility } = this.state;
    if (videoGifPhotoViewVisibility === 'none') {
      return this.setState({ 
        videoGifPhotoViewVisibility: `block` 
      }, () => {
        document.getElementsByTagName('body')[0].style.overflowY = `hidden`;
      })
    }

    if (e.target.classList.contains('videogifphotoview')) {
      return this.setState({
        videoGifPhotoViewVisibility: 'none' 
       }, () => {
         document.getElementsByTagName('body')[0].style.overflowY = `scroll`;
       })
    }
  }

  render() {
    const {
      videoGifPhotoViewVisibility,
      profileViewVisibility
    } = this.state;
    const {
      toggleVideoGifPhotoViewVisibility,
      toggleProfileViewVisibility
    } = this;
    return (
      <div className="home">
        <Header />
        <Suspense fallback={<div>loading</div>}>
          <Jumbotron/>
        </Suspense>
        <Container 
        toggleVideoGifPhotoViewVisibility={toggleVideoGifPhotoViewVisibility}
        toggleProfileViewVisibility={toggleProfileViewVisibility}
        />
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
            videoGifPhotoViewVisibility={videoGifPhotoViewVisibility} 
            toggleVideoGifPhotoViewVisibility={toggleVideoGifPhotoViewVisibility}
            mediaType={null}/>
        </Suspense>
        <Suspense fallback={<div>loading</div>}>
          <ProfileView
            profileViewVisibility={profileViewVisibility}
            toggleProfileViewVisibility={toggleProfileViewVisibility}
          />
        </Suspense>
        <Suspense fallback={<div>loading</div>}>
          <Project />
        </Suspense>
      </div>
    )
  }
}

export default Home; 