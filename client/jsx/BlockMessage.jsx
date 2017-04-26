import React from 'react';

export default class BlockMessage extends React.Component{


  render(){

      if(!this.props.page.show) return null;

      let data = this.props.page.content.split('$');
      return (
        <div>
          <div className="app-body-title">{this.props.page.title}</div>
          <div className="app-body-block">
            {data.map((para, i) => <div className="app-body-para" key={i}>{para}</div>)}
          </div>
        </div>
      )
  }

}
