import React from 'react';

class MenuToggler extends React.Component{
  render(){
    return (<button className="top-bar-menu-button" onClick={this.props.toggleMenu}>
      menu
    </button>);
  }
}

export default MenuToggler;
