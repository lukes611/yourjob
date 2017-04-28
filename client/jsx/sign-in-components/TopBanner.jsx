import React from 'react';

export default class TopBanner extends React.Component{
  render(){
    let goHome = () => {
      window.location.href = '/';
    };

    return (
      <div className="sign-in-top-bar">
        <img src="ims/logo.png" onClick={goHome}></img>
      </div>
    );
  }
}
