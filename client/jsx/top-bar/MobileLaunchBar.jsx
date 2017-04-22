import React from 'react';

export default class MobileLaunchBar extends React.Component{

  render(){
    return (
      <div className="top-bar-mobile-links-div">
        <div className="top-bar-mobile-links">home</div>
        <div className="top-bar-mobile-links">jobs</div>
        <div className="top-bar-mobile-links">info</div>
        <div className="top-bar-mobile-links" style={{borderRight:'none'}}>profile</div>
      </div>
    );
  }

}
