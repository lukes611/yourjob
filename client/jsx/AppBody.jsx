import React from 'react';
import VideoDisplay from './VideoDisplay.jsx';
import BlockMessage from './BlockMessage.jsx';


export default class AppBody extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      videos : [],
      content : {}
    };
  }

  componentDidMount(){
    $.get('/videos', (data) => {
      let videos = data.videos;
      $.get('/content', (data) => {
        this.setState({videos:videos, content : data.content});
      });
    });

  }

  render(){

    let page = {
      title : this.props.page
    };


    page.content = this.state.content[page.title];
    page.show = page.content !== undefined;

    
    return (
      <div className="app-body">
        <div className="app-body-contents">
          <BlockMessage page={page} />

          <div className="app-body-title">
            Reccomended Jobs
          </div>
          {this.state.videos.map((video,i) => <VideoDisplay key={i} video={video}/>)}
        </div>
      </div>
    );
  }
}
