import React from 'react';
import {render} from 'react-dom';

class LogIn extends React.Component{
  render(){
    return (
      <div>
        log-in stuff
      </div>
    );
  }
}

class SignUp extends React.Component{
  render(){
    return (
      <div>
        sign-up stuff
      </div>
    );
  }
}


class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div style={{backgroundColor:'red'}}>
        <div style={{backgroundColor:'blue'}}>
          <img src="ims/logo.png"></img>
        </div>
        <div style={{backgroundColor:'green'}}>
          <div style={{backgroundColor:'orange'}}>
            <div style={{backgroundColor:'red'}}>log in</div>
            <div style={{backgroundColor:'lightblue'}}>sign up</div>
            <LogIn/>
            <SignUp/>
          </div>
        </div>
      </div>
    );
  }

}

render(<App/>, document.getElementById('app'))
