import React, { Component, lazy, Suspense } from 'react';
import axios from 'axios';
import '../scss/components/mediaupload.scss';

class MediaUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      previewMedia: [],
      uploaded: [],
      deletedMedia: [],
      url: 'https://api.cloudinary.com/v1_1/dxlhzerlq/upload',
      data: new FormData()
    }
  }

  removePhoto = (event) => {
    const parentOfPhoto = event.target.parentNode.parentNode.parentNode;
    const photo = event.target.parentNode.parentNode;
    const deletedId = photo.id;
    this.setState(prevState => {
      return {
        deletedMedia: [...prevState.deletedMedia, deletedId]
      }
    }, () => {
      parentOfPhoto.removeChild(photo);
    })
  }

  returnMediaTag = (type, src) => {
    const v = /video/
    if (v.exec(type) === null) {
      return <img src={`${src}`}/>
    }

    return (
      <video src={`${src}`}></video>
    )
  }

  renderMediaPreview = () => {
    const { previewMedia } = this.state;
    let keyGen = 0;
    return previewMedia.map(media => {
      keyGen+=1;
      return (
        <figure key={keyGen} id={`${media.id}`}>
          <span className={`mediaupload__content__notuploaded`}></span>
          <span className={`mediaupload__content__uploadedindicator--1`}></span>
          <span className={`mediaupload__content__uploadedindicator--2`}></span>
          <span className={`mediaupload__content__uploadedindicator--3`}></span>
          <span className={`mediaupload__content__uploadedindicator--4`}></span>
          {this.returnMediaTag(media.filetype, media.src)}
          <div className={`mediaupload__content__exbtn`} onClick={this.removePhoto}>
            <span></span>
            <svg>
              <use xlinkHref="./img/sprite.svg#icon-cross" />
            </svg>
          </div>
          <div className={`mediaupload__indicator`}>
            <svg>
              <use xlinkHref="./img/sprite.svg#icon-spinner2" />
            </svg>
          </div>
        </figure>
      )
    })
  }

  handleUpload = (file) => {
    const { url, data } = this.state;
    const config = {
      headers: { 
        "X-Requested-With": "XMLHttpRequest" 
      },
      onUploadProgress: event => {
        let progress = Math.round((event.loaded * 100.0) / event.total);
        if (document.getElementById(`${file.id}`) !== null) {
          Array.from(document.getElementById(`${file.id}`).children)[0]
          .style.height = `${100 - progress}%`;

          if (progress >= 25) {
            Array.from(document.getElementById(`${file.id}`).children)[2]
            .style.height = `100%`;
          }
  
          if (progress >= 50) {
            Array.from(document.getElementById(`${file.id}`).children)[4]
            .style.width = `100%`;
          }
  
          if (progress >= 75) {
            Array.from(document.getElementById(`${file.id}`).children)[1]
            .style.height = `100%`;
          }
  
          if (progress === 100) {
            Array.from(document.getElementById(`${file.id}`).children)[3]
            .style.width = `100%`;
          }
        }
      }
    }
    data.append('file', file);
    try {
      axios.post(url, data, config).then(res => {
        if (res.data) {
          //console.log(res.data);
          const uploaded = {
            id: file.id,
            data: res.data
          }
          this.setState(prevState => {
            return {
              uploaded: [...prevState.uploaded, uploaded]
            }
          }, () => {
            if (document.getElementById(file.id) !== null) {
              Array.from(document.getElementById(file.id).children)[7]
              .style.display = `none`;
            }
          })
        }
      })
    }
    catch(error) {
      console.log('there is an error yo')
    }
  }

  handlePreview = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const createFileId = ( length ) => {
        let str = "";
        for ( ; str.length < length; str += Math.random().toString( 36 ).substr( 2 ));
          return str.substr( 0, length );
      }
      file.id = createFileId((Math.round(file.lastModified * 100)/file.lastModified));
      const previewObj = {
        src: reader.result,
        id: file.id,
        filetype: file.type
      }
      this.handleUpload(file)
      this.setState(prevState => {
        return {
          previewMedia: [...prevState.previewMedia, previewObj]
        }
      })
    }
  }

  handleFilesDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.removeDragOvFeedback(event);
    if (event.dataTransfer.files) {
      const fileArr = event.dataTransfer.files;
      Array.from(fileArr).forEach(file => {
        this.handlePreview(file);
        this.setState(prevState => {
          return {
            files: [...prevState.files, file]
          }
        })
      })
    }
  }

  handleFiles = () => {
    const fileArr = this._input.files;
    Array.from(fileArr).forEach(file => {
      //console.log(file)
      this.handlePreview(file)
      this.setState(prevState => {
        return {
          files: [...prevState.files, file]
        }
      })
    })
  }

  sendDragOvFeedback = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this._droparea.style.background = 'rgba(232, 67, 147, 0.2)';
    this._droparea.style.borderRadius = '.3rem 3rem';
    this._droparea.style.border = '.5px solid rgba(232, 67, 147, 0.8)';
    this._droparea.style.boxShadow = '0 0px 1px rgba(0, 0, 0, 0.16), 0 3px 3px rgba(0, 0, 0, 0.1)';
  }

  removeDragOvFeedback = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this._droparea.style.background = '#F0F3F4';
    this._droparea.style.borderRadius = '.3rem';
    this._droparea.style.border = 'none';
    this._droparea.style.boxShadow = 'none';
  }

  componentDidMount() {
    const { data } = this.state;
    data.append("upload_preset", "acjlrvii");
  }

  render() {
    const { files, deletedMedia } = this.state;
    return (
      <div 
        className={`mediaupload`}
        ref={c => (this._droparea = c)} 
        onDragOver={this.sendDragOvFeedback}
        onDragEnter={this.sendDragOvFeedback}
        onDragLeave={this.removeDragOvFeedback}
        onDrop={this.handleFilesDrop}>
        <h3 className={`mediaupload__h3`}>{files.length - deletedMedia.length} files chosen</h3>
        <input type="file" id="mediaupload" 
        multiple accept="video/*,  video/x-m4v, video/webm, video/x-ms-wmv, video/x-msvideo, video/3gpp, video/flv, video/x-flv, video/mp4, video/quicktime, video/mpeg, video/ogv, .ts, .mkv, image/*, image/heic, image/heif" 
        ref={c => (this._input = c)}
        onChange={this.handleFiles}
        style={{
          display: `none`
        }}/>
        <label htmlFor="mediaupload" className={`mediaupload__label`}></label>
        <div className={`mediaupload__content`}>
          {this.renderMediaPreview()}
        </div>
      </div>
    )
  }
}

export default MediaUpload;