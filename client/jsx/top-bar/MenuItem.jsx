import React from 'react';

export default class MenuItem extends React.Component{

  isSelected(){
    return this.props.selectedMenuItem == this.props.text;
  }

  render(){

    let style = {};
    if(this.isSelected()){
      style={
        backgroundColor : 'rgb(52,73,94)',
        color : 'rgb(52,152,219)'
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
