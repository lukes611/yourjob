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

class BlockMessage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      data : []
    };
  }

  componentWillReceiveProps(props){
    $.get('/content', {type : props.page}, (data) => {
      if(data.ok){
        this.setState({data : data.raw.split('$')});
      }else this.setState({data : ''});
    });
  }


  render(){
      if(this.state.data.length == 0) return <div></div>;
      return (
        <div>
          <div className="app-body-title">{this.props.page}</div>
          <div className="app-body-block">
            {this.state.data.map((para, i) => <div className="app-body-para" key={i}>{para}</div>)}
          </div>
        </div>
      )
  }

}

export default class AppBody extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      videos : [],
      data : ''
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
          <BlockMessage page={this.props.page} />

          <div className="app-body-title">
            Reccomended Jobs
          </div>
          {this.state.videos.map((video,i) => <VideoDisplay key={i} video={video}/>)}
        </div>
      </div>
    );
  }
}
