import React from 'react';
import {render} from 'react-dom';

class TopBanner extends React.Component{
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

class LogIn extends React.Component{
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

class SignUp extends React.Component{
  render(){

    if(!this.props.display) return null;

    return (
      <div className="sign-up-body">
        sign-up stuff
      </div>
    );
  }
}


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      signInOn : true
    };
  }

  render(){

    let signInOn = this.state.signInOn;
    let unselectedStyle = {
      backgroundColor : 'rgb(236,240,241)',
      color : 'rgb(41,128,185)'
    };

    return (
      <div className="sign-in-app">
        <TopBanner/>
        <div className="sign-in-body">
          <div className="sign-in-contents">
            <div className="sign-in-form">
              <div className="sign-in-loginButton" style={signInOn?{}:unselectedStyle}  onClick={this.signInOn.bind(this, true)} >log-in</div>
              <div className="sign-in-signUpButton" style={!signInOn?{}:unselectedStyle} onClick={this.signInOn.bind(this, false)}>sign up</div>
                <LogIn display={signInOn} />
                <SignUp display={!signInOn} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  signInOn(on){
    this.setState({signInOn : on});
  }

}

render(<App/>, document.getElementById('app'))
