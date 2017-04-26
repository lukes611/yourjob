import React from 'react';
import VideoDisplay from './VideoDisplay.jsx';
import BlockMessage from './BlockMessage.jsx';


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
