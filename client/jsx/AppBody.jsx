import React from 'react';

class VideoDisplay extends React.Component{
  render(){
    let randomDate = new Date();
    randomDate.setDate((new Date()).getDate() + Math.floor(Math.random() * 2000));
    let data = {
      image : '/ims/coles.png',
      company : 'coles',
      views : Math.floor(Math.random() * 900),
      date : randomDate
    };

    return (
      <div className="app-body-video" >
        <img src="/ims/coles.png"></img>
        <div className="app-body-video-info">
          <a href="NULL" className="app-body-video-info-title">
            Checkout-dude
          </a>
          <div className="app-body-video-info-other">
            <a href="NULL">Coles</a><br/>
            {data.views} views on {data.date.getDate()} {(data.date + '').substring(4,7)}
          </div>
        </div>
      </div>
    );
  }
}

export default class AppBody extends React.Component{
  render(){

    let videoNames = [];
    for(let i = 0; i < 8; i++) videoNames.push('vid' + i);

    return (
      <div className="app-body">
        <div className="app-body-contents">
          <div className="app-body-title">
            Reccomended Jobs
          </div>
          {videoNames.map((n,i) => <VideoDisplay key={i}/>)}
        </div>
      </div>
    );
  }
}
