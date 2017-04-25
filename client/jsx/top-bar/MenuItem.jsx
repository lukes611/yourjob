import React from 'react';

export default class MenuItem extends React.Component{

  isSelected(){
    return this.props.selectedMenuItem == this.props.text;
  }

  render(){

    let style = {};
    if(this.isSelected()){
      style={
        backgroundColor : 'rgb(192,57,43)',
        color : 'rgb(236,240,241)'
      };
    }

    return (
      <div className="desktop-menu-item" style={style} onClick={this.changeDisplay.bind(this)}>
        {this.props.text}
      </div>
    )
  }
  changeDisplay(){
    if(!this.isSelected()) this.props.changeDisplay(this.props.text);
  }
}
