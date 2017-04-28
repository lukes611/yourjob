import React from 'react';

export default class LogIn extends React.Component{
  render(){

    if(!this.props.display) return null;

    return (
      <div className="sub-log-in-body">
        <div className="sub-log-in-label">username: </div>
        <input className="sub-log-in-input" type="text" />
        <div className="sub-log-in-label">password: </div>
        <input className="sub-log-in-input" type="password" /> <br/>
        <div className="sub-log-in-label sub-log-in-label-remember-me" >remember me: <input className="sub-log-in-cb" type="checkbox" /> </div>
        <button className="sub-log-in-button">log-in</button>
      </div>
    );
  }
}
