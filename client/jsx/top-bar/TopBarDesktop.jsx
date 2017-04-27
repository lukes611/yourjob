import React from 'react';
import MenuToggler from './MenuToggler.jsx';
import SearchBar from './SearchBar.jsx';
import MobileLaunchBar from './MobileLaunchBar.jsx';

class TopBarDesktop extends React.Component{
  render(){
    return (
      <div className="top-bar">
        <div className="top-bar-1">
          <img className="top-bar-1-img" src="ims/logo.png"></img>
          <MenuToggler toggleMenu={this.props.toggleMenu} />
        </div>
        <MobileLaunchBar changeDisplay={this.props.changeDisplay} selectedMenuItem={this.props.selectedMenuItem} /><SearchBar search={this.props.search} />
        <div className="top-bar-3">
          <button className="top-bar-sign-in-button" onClick={this.gotoSignIn.bind(this)} >Profile</button>
        </div>
      </div>
  );
  }

  gotoSignIn(){
    window.location.href = 'sign-in.html';
  }
}

export default TopBarDesktop;
