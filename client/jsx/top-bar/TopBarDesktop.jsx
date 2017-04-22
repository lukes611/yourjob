import React from 'react';
import MenuToggler from './MenuToggler.jsx';
import SearchBar from './SearchBar.jsx';
import MobileLaunchBar from './MobileLaunchBar.jsx';

class TopBarDesktop extends React.Component{
  render(){
    return (
      <div className="top-bar">
        <div className="top-bar-1">
          <MenuToggler toggleMenu={this.props.toggleMenu} />
          <button className="top-bar-your-job-button">
            your-job
          </button>
        </div>
        <MobileLaunchBar changeDisplay={this.props.changeDisplay} selectedMenuItem={this.props.selectedMenuItem} />
        <SearchBar search={this.props.search} />
        <div className="top-bar-3">
          <button className="top-bar-sign-in-button" >sign-in</button>
        </div>
      </div>
  );
  }
}

export default TopBarDesktop;
