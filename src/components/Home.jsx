import React, { Component, lazy, Suspense } from 'react';

import Header from './Header';
import Explore_Container from './Explore_Container';
import SignInForm from './SignInForm';
const Jumbotron = lazy(() => import('./Jumbotron'));
const Project = lazy(() => import('./Project'));
const ProfileView = lazy(() => import('./ProfileView'));
const JobView = lazy(() => import('./JobView'));
const Profile = lazy(() => import('./Profile'));
const Job = lazy(() => import('./Job'))
import MediaUpload from './MediaUpload';
import MediaSlide from './MediaSlide';
const VideoDisplay = lazy(() => import('./VideoDisplay'))

//import FormField, CommentField components for development purposes
import FormField from './FormField';
import CommentField from './CommentField';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoGifPhotoViewVisibility: 'none',
      profileViewVisibility: 'none',
      jobViewVisibility: 'none'
    }
  }

  toggleJobViewVisibility = (e) => {
    if (e.target.classList.contains('jobview')) {
      return this.setState({ jobViewVisibility: 'none' }, () => {
        document.getElementsByTagName('body')[0].style.overflowY = `scroll`;
      })
    }

    this.setState({ jobViewVisibility: 'block' }, () => {
      document.getElementsByTagName('body')[0].style.overflowY = `hidden`;
    });
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

  componentDidMount() {
    window.players = [];
  }

  render() {
    const {
      profileViewVisibility,
      jobViewVisibility
    } = this.state;
    const {
      toggleProfileViewVisibility,
      toggleJobViewVisibility
    } = this;
    return (
      <div className="home">
        <Header />
        <Suspense fallback={<div>loading</div>}>
          <Jumbotron/>
        </Suspense>
        <Explore_Container 
        toggleProfileViewVisibility={toggleProfileViewVisibility}
        toggleJobViewVisibility={toggleJobViewVisibility}
        />
        <MediaUpload />
        <MediaSlide 
        assets={[
          {
            src: './img/br.gif',
            filetype: 'image'
          },
          {
            src: './img/download2.jpg',
            filetype: 'image'
          },
          {
            src: './img/project.jpg',
            filetype: 'image'
          },
          {
            src: "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
            filetype: "video/mp4"
          }
        ]}/>
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
          <ProfileView
            profileViewVisibility={profileViewVisibility}
            toggleProfileViewVisibility={toggleProfileViewVisibility}
          />
        </Suspense>
        <Suspense fallback={<div>loading</div>}>
          <JobView 
          toggleJobViewVisibility={toggleJobViewVisibility}
          jobViewVisibility={jobViewVisibility}
          />
        </Suspense>
        <Suspense fallback={<div>loading</div>}>
          <Project />
        </Suspense>
        <Suspense fallback={<div>loading</div>}>
          <Profile toggleProfileViewVisibility={toggleProfileViewVisibility}/>
        </Suspense>
        <Suspense fallback={<div>loading</div>}>
          <Job previewMedia={"./img/project.jpg"} toggleJobViewVisibility={toggleJobViewVisibility}/>
        </Suspense>
      </div>
    )
  }
}

export default Home; 