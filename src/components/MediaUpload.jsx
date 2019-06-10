import React, { Component, lazy, Suspense } from 'react';
import '../scss/components/mediaupload.scss';

class MediaUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      previewMedia: []
    }
  }

  renderMediaPreview = () => {
    const { previewMedia } = this.state;
    let keyGen = 0;
    return previewMedia.map(media => {
      keyGen+=1;
      return (
        <figure key={keyGen}>
          <img src={`${media}`}/>
        </figure>
      )
    })
  }

  handlePreview = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.setState(prevState => {
        return {
          previewMedia: [...prevState.previewMedia, reader.result]
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
      fileArr.forEach(file => {
        this.handlePreview(file)
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
    fileArr.forEach(file => {
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
    this._droparea.style.background = '#fff';
    this._droparea.style.borderRadius = '.3rem';
    this._droparea.style.border = 'none';
    this._droparea.style.boxShadow = 'none';
  }

  render() {
    const { files } = this.state;
    return (
      <div 
        className={`mediaupload`}
        ref={c => (this._droparea = c)} 
        onDragOver={this.sendDragOvFeedback}
        onDragLeave={this.removeDragOvFeedback}
        onDrop={this.handleFilesDrop}>
        <h3 className={`mediaupload__h3`}>{files.length} files chosen</h3>
        <input type="file" id="mediaupload" 
        multiple accept="image/*" 
        ref={c => (this._input = c)}
        onChange={this.handleFiles}/>
        <div className={`mediaupload__content`}>
          {this.renderMediaPreview()}
        </div>
      </div>
    )
  }
}

export default MediaUpload;