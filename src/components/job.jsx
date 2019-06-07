import React, { Component } from 'react';

import '../scss/components/job.scss'

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  renderPreviewMedia = (previewMedia) => {
    if (previewMedia && previewMedia !== null && previewMedia !== undefined) {
      return(
        <figure className={`job__preview--fig`}>
          <img className={`job__preview--img`} src={previewMedia}/>
        </figure>
      )
    }
    return;
  }

  render() {
    const { 
      previewMedia,
      toggleJobViewVisibility
    } = this.props;
    return (
      <div className={`job`} onClick={toggleJobViewVisibility}>
        <span className={`job--btn`}>View</span>
        {this.renderPreviewMedia(previewMedia)}
        <div className={`job--text`}>
          <h4 className={`job--h4`}>{`Title of Job`}</h4>
          <div className={`job__details`}>
            <div className={`job__details--description`}>
              <p>{`We're making a short film that describes the state of love during the me too era, pls feel free to check out our preview. 
              The beauty van be found anywhere proverb is not a myth indeed.`}</p>
            </div>
          </div>
          <div className={`job__meta`}>
            <div className={`job__meta--item`}>Added by {`Jack Lowrey`}</div>
            <div className={`job__meta--item`}>Added {`April 1st 2019`}</div>
          </div>        
        </div>
      </div>
    )
  }
}

export default Job;