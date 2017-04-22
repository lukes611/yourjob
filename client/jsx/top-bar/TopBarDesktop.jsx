import React from 'react';
import MenuToggler from './MenuToggler.jsx';
import SearchBar from './SearchBar.jsx';
import TopBarMobile from './TopBarMobile.jsx';

class TopBarDesktop extends React.Component{
  render(){
    return (
      <div className="top-bar">
        <div className="top-bar-1">
          <MenuToggler/>
          <button className="top-bar-your-job-button">
            your-job
          </button>
        </div>
        <TopBarMobile/>
        <SearchBar update={this.props.update} entry={this.props.entry} suggestions={this.props.suggestions} />
        <div className="top-bar-3">
          <button className="top-bar-sign-in-button" >sign-in</button>
        </div>
      </div>
  );
  }
}

export default TopBarDesktop;
