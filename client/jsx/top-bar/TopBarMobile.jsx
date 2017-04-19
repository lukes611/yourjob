import React from 'react';

class SearchBar extends React.Component{
  render(){
    return (
      <div className="top-bar-mobile-search-bar">
        <input className="top-bar-mobile-search-bar-input" placeholder="Search" />
        <button className="top-bar-mobile-search-bar-button">
          <img src="ims/search-icon.png"></img>
        </button>
        </div>
    );
  }
}

export default class TopBarMobile extends React.Component{

  render(){
    return (
      <div className="top-bar-mobile">
        <div className="top-bar-mobile-links-div">
          <div className="top-bar-mobile-links">home</div>
          <div className="top-bar-mobile-links">jobs</div>
          <div className="top-bar-mobile-links">info</div>
          <div className="top-bar-mobile-links" style={{borderRight:'none'}}>profile</div>
        </div>
        <SearchBar/>
      </div>
    );
  }

}
