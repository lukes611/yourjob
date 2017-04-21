import React from 'react';

class MenuToggler extends React.Component{
  render(){
    return (<button className="top-bar-menu-button" onClick={this.toggleMenuBar.bind(this)}>
      menu
    </button>);
  }

  toggleMenuBar(){
    $($('.app-body-menu')[0]).toggle();
  }
}

export default MenuToggler;
