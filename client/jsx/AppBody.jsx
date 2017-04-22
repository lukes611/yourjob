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
            <a href="NULL">Coles</a><br/>
            {this.props.video.views} views on {date}
          </div>
        </div>
      </div>
    );
  }
}

export default class AppBody extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      videos : []
    };
  }

  componentDidMount(){
    $.get('/videos', (data) => {
      this.setState({videos : data.videos});
    });
  }

  render(){
    return (
      <div className="app-body">
        <div className="app-body-contents">
          <div className="app-body-title">about us</div>
          <div className="app-body-block">
          <div className="app-body-para">

            For many years I struggled to find a job out of University. I would hate having to go onto job search websites, only to be bogged down in convoluted, confusing job ads that I believed not only made you want to go to sleep, but in many cases, also misrepresented what the job actually was.
          </div>
          <div className="app-body-para">
So that’s why I came up with Yourjob. A website that shows the job applicant what it would be like to be a fly on the wall at a particular business. To be able to see the job for what it was. To see who they would be working with and to gain more of an insight into the nuances and the full picture of what working at that business would be like.
Our generation love visual aids, and this is the future of job search sites. A website that shows you the job, as told by the perspective employer in a guided tour of the office, or construction site, or wherever the job may be.
We don’t write about a painting when it’s in front of us. We like to look at it, and see it for exactly what it is. And we believe there’s a real need to shed a light on the unknown that is applying for jobs.
So that’s what I think. Let’s start looking at our jobs, instead of looking at a confusing, over-dressed job advert that gives you a headache.
          </div>
          </div>

          <div className="app-body-title">
            Reccomended Jobs
          </div>
          {this.state.videos.map((video,i) => <VideoDisplay key={i} video={video}/>)}
        </div>
      </div>
    );
  }
}
