import React from 'react';

export default class MobileLaunchBar extends React.Component{

  render(){
    let menuItemNames = 'Home,Jobs,About,Profile'.split(',');
    return (<div className="top-bar-mobile-links-div">
        {menuItemNames.map((name, index) => {
            let style = {};
            if(name == this.props.selectedMenuItem) style= Object.assign({}, style, {backgroundColor : 'rgb(52,152,219)', color : 'rgb(236,240,241)'});
            return <div key={index} onClick={this.changeDisplay.bind(this,name)} className="top-bar-mobile-links" style={style}>{name}</div>;
        })}
      </div>);
  }

  changeDisplay(name){
    this.props.changeDisplay(name);
  }

}
