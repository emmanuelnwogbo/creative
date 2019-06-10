const dragAnimationCardStyle = {
  borderRadius: '.5rem',
  border: '.2rem solid transparent',
  margin: '1rem',
  width: '25.2rem',
  height: '20rem',
  cursor: 'pointer',
  background: '#EEEAE6',
  overflow: 'hidden',
  transition: 'all 1s cubic-bezier(0.165, 0.84, 0.44, 1)'
}

const floatingCircle = {
  position: 'relative',
  background: '#ECF3F4',
  height: '6rem',
  width: '6rem',
  margin: '6.5rem auto',
  borderRadius: '50%',
  transition: 'all .1s ease-in-out'
}

const dragAnimationCardSpanOne = {
  display: 'block',
  position: 'relative',
  Zindex: '1000',
  width: '.5rem',
  height: '55%',
  background: '#fff',
  borderRadius: '3rem',
  margin: '1rem auto 0 auto',
  transform: 'translateY(1.3rem)'
}

const dragAnimationCardSpanTwo = {
  display: 'block',
  position: 'relative',
  Zindex: '1000',
  width: '.5rem',
  height: '55%',
  background: '#fff',
  borderRadius: '3rem',
  margin: '1rem auto 0 auto',
  transform: 'translateY(-3rem) rotate(90deg)'
}

const triggerDragEnterAnimation = e => {
  e.preventDefault();
  e.stopPropagation();
  document.getElementById('floatingCircle').classList.add('bouncing');
  document.getElementById('floatingCircle').style.backgroundColor = '#454E93';
  document.getElementById('dragAnimationCard').style.border = '.2rem solid #454E93';
  document.getElementById('dragAnimationCard').style.borderRadius = '5px 3rem 3rem 5px';
}

const removeDragEnterAnimation = e => {
  e.preventDefault();
  e.stopPropagation();
  document.getElementById('floatingCircle').classList.remove('bouncing');
  document.getElementById('floatingCircle').style.backgroundColor = '#ECF3F4';
  document.getElementById('dragAnimationCard').style.borderRadius = '.5rem';
  document.getElementById('dragAnimationCard').style.border = '.2rem solid transparent';
}

class DragAnimationCard extends React.Component {
  constructor() {
    super();
    this.triggerDragEnterAnimation = triggerDragEnterAnimation.bind(this);
    this.handleFiles = this.handleFiles.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }
  
  handleDrop(e) {
    removeDragEnterAnimation(e);
    let dt = e.dataTransfer;
    let files = dt.files;
    this.handleFiles(files);
  }
  
  handleFiles(files) {
    const Files = Array.from(files);
    this.props.updateAppCards(Files);
  }
  
  render() {
    return (
      <div id="dragAnimationCard" 
       style={dragAnimationCardStyle} 
       className="dragAnimationCard"
       onDragOver={this.triggerDragEnterAnimation} 
       onDragEnter={this.triggerDragEnterAnimation}
       onDrop={this.handleDrop}>
        <div id='floatingCircle' style={floatingCircle}>
          <span style={dragAnimationCardSpanOne}>
          </span>
          <span style={dragAnimationCardSpanTwo}>
          </span>
         </div>
       </div>
    )
  }
}

class ImagePreviewCard extends React.Component {
  constructor() {
    super();
    this.style = {
      position: 'relative',
      borderRadius: '.5rem',
      border: '.2rem solid transparent',
      margin: '1rem',
      width: '25.2rem',
      height: '20rem',
      cursor: 'pointer',
      background: '#EEEAE6',
      overflow: 'hidden',
      transition: 'all 1s cubic-bezier(0.165, 0.84, 0.44, 1)',
      figureStyle: {
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: 'blue'
      },
      imgStyle: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        display: 'block'
      },
      removeSelfButton: {
        position: 'absolute',
        backgroundImage: 'linear-gradient(to right bottom, rgba(255,255,255, 0.8), rgba(255,255,255, 0.8))',
        height: '4.5rem',
        width: '4.5rem',
        borderRadius: '50%',
        transition: 'all .1s ease-in-out',
        zIndex: '5000',
        right: '.5rem',
        top: '.5rem',
        transform: 'rotate(136deg)',
        cursor: 'pointer'
      },
      removeSelfButtonSpanOne: {
        display: 'block',
        position: 'relative',
        width: '.5rem',
        height: '55%',
        background: '#4a515f',
        borderRadius: '3rem',
        margin: 'auto',
        transform: 'translateY(1rem)'
      },
      removeSelfButtonSpanTwo: {
        display: 'block',
        position: 'relative',
        width: '.5rem',
        height: '55%',
        background: '#4a515f',
        borderRadius: '3rem',
        margin: 'auto',
        transform: 'translateY(-1.4rem) rotate(92deg)'
      },
      removeSelfButtonHandle: {
        position: 'absolute',
        zIndex: '2000',
        width: '100%',
        height: '100%',
        background: 'rgba(255,255,255, 0.8)',
        top: '0',
        left: '0',
        borderRadius: '50%',
        opacity: '.4'
      }
    };
  }
  
  render() {
    return (
      <div style={this.style} id={this.props.id}>
        <div style={this.style.removeSelfButton}>
          <span style={this.style.removeSelfButtonHandle} onClick={this.props.removePreview}></span>
          <span style={this.style.removeSelfButtonSpanOne}>
          </span>
          <span style={this.style.removeSelfButtonSpanTwo}>
          </span>
        </div>
        <figure style={this.style.figureStyle}>
          <img style={this.style.imgStyle} src={this.props.src}/>
        </figure>
      </div>
    )
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      numOfPhotos: 0,
      uploadedPhotoSrcs: []
    };
    this.style = {
      backgroundColor: '#FBF9F7',
      width: '111rem',
      margin: '1.5rem auto',
      renderCardsStyle: {
        width: '100%',
        padding: '.5rem 1rem',
        display: 'flex',
        flexWrap: 'wrap',
      }
    };
    this.triggerDragEnterAnimation = triggerDragEnterAnimation.bind(this);
    this.removeDragEnteranimation = removeDragEnterAnimation.bind(this);
    this.updateCards = this.updateCards.bind(this);
    this.renderCards = this.renderCards.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.removePreview = this.removePreview.bind(this);
  }
  
  updateCards(files) {
    const previewLinks = []
    files.forEach(file => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.uploadFile(file, reader.result);
        previewLinks.push(`${reader.result}`);
        this.setState(prevState => {
          return {
            num: prevState.numOfPhotos+=1,
            photos: prevState.photos.concat(previewLinks)
          }
        })
      }
    });
  }
  
  renderCards() {
    return (
     <div style={this.style.renderCardsStyle}>
        {
          [...new Set(this.state.photos)].map(photo => {
            return <ImagePreviewCard src={photo} id={photo} removePreview={this.removePreview}/>
          })
        }
       <DragAnimationCard updateAppCards={this.updateCards}/>
     </div>
    )
  }
  
  uploadFile(file, filePreviewLink) {
    //console.log(file, filePreviewLink)
    const config = {
      headers: { "X-Requested-With": "XMLHttpRequest" }
    }
    const url = 'https://api.cloudinary.com/v1_1/dxlhzerlq/upload';
    const data = new FormData();
    data.append("upload_preset", "acjlrvii");
    data.append('file', file);
    axios.post(url, data, config).then(res => {
      if (res.data) {
        const dataArr = [];
        dataArr.push(res)
        this.setState(prevState => {
          return {
            uploadedPhotoSrcs: [...prevState.uploadedPhotoSrcs, ...dataArr]
          }
        });
        //console.log('src: ', document.getElementById(filePreviewLink))
        document.getElementById(filePreviewLink).childNodes[1].childNodes[0].src = `${res.data.secure_url}`
        //console.log(document.getElementById(filePreviewLink).childNodes[2].childNodes[0].src);
        //console.log(res, this)
        console.log(this.state.uploadedPhotoSrcs, this.state.photos, this.state.numOfPhotos)
      }
    })
  }
  
  removePreview(e) {
    e.stopPropagation();
    //e.target.parentNode.parentNode.remove()
    const photoIds = [...new Set(this.state.photos)];
    const photoLinks = this.state.uploadedPhotoSrcs;
    const remainingIds = photoIds.filter(id => id !== e.target.parentNode.parentNode.id);
    //const remainingPhotoLinks = photoLinks.filter(link => link.data.secure_url)
    const remainingPhotoLinks = photoLinks.filter(link => link.data.secure_url !== e.target.parentNode.nextSibling.childNodes[0].src);
    console.log(remainingPhotoLinks)
    //console.log(e.target.parentNode.nextSibling.childNodes[0].src)
    //console.log(remainingIds);
    this.setState(prevState => {
      return {
        numOfPhotos: prevState.numOfPhotos-=1,
        photos: remainingIds,
        uploadedPhotoSrcs: remainingPhotoLinks
      }
    }, () => {
      console.log(this.state)
    });
  }
  
  render() {
    return (
      <div style={this.style} 
        onDragOver={this.triggerDragEnterAnimation} 
        onDragEnter={this.triggerDragEnterAnimation} 
        onDragLeave={this.removeDragEnteranimation}
        onDrop={this.removeDragEnteranimation}
        id='app'>
        <p>{this.state.numOfPhotos}</p>
        {this.renderCards()}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));