import React from 'react';

export default class BlockMessage extends React.Component{

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
