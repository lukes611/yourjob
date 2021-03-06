import React from 'react';

class VideoDisplay extends React.Component{
  render(){
    let date = new Date(this.props.video.date);
    date = date.getDate() + ' ' + (date+'').substring(4,7);

    return (
      <div className="app-body-video" >
        <img src={'ims/jobs/' + this.props.video.image}></img>
        <div className="app-body-video-info">
          <a href="NULL" className="app-body-video-info-title">
            {this.props.video.occupation}
          </a>
          <div className="app-body-video-info-other">
            <a href="NULL">{this.props.video.industry}</a><br/>
            {this.props.video.views} views on {date}
          </div>
        </div>
      </div>
    );
  }
}

export default VideoDisplay;
