import React from 'react';

class SearchBar extends React.Component{
  render(){
    return (
      <input />
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
