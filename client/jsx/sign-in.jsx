import React from 'react';
import {render} from 'react-dom';
import TopBanner from './sign-in-components/TopBanner.jsx';
import LogIn from './sign-in-components/LogIn.jsx';
import SignInFormElement from './sign-in-components/SignInFormElement.jsx';

/*
click - register:
: replies ok or not,
click login : replies ok or not

user
id | user-name | salted-password | user-type[admin|user|company] | registered[true|false]



*/



class UserData extends React.Component{
  render(){
    if(!this.props.display) return null;
    return (
      <div>
        <SignInFormElement label="first-name" update={this.props.update}/>
        <SignInFormElement label="last-name" update={this.props.update}/>
        <SignInFormElement label="dob" type="date" update={this.props.update}/>
      </div>
    );
  }
}

class CompanyData extends React.Component{
  render(){
    if(!this.props.display) return null;
    return (
      <div>
        <SignInFormElement label="company name" update={this.props.update}/>
      </div>
    );
  }
}


class SignUp extends React.Component{
  constructor(p){
    super(p);
    this._state = {
      user : {},
      company : {}
    };
    this.state = Object.assign({}, this._state);
  }

  sync(){
    this.setState(Object.assign({}, this._state));
  }

  render(){

    if(!this.props.display) return null;
    let update = this.updateValue.bind(this);
    let updateUser = (name, value)=>{
      this._state['user'][name] = value;
      this.sync();
    };
    let updateCompany = (name, value)=>{
      this._state['company'][name] = value;
      this.sync();
    };

    return (
      <div className="sub-log-in-body">
        <SignInFormElement label="user name" update={update} />
        <SignInFormElement label="email" update={update} />
        <SignInFormElement label="password" type="password" update={update} />
        <SignInFormElement label="confirm-password" type="password" update={update} />
        <SignInFormElement name="isCompany" label="I am a company, advertising jobs" update={update} type="checkbox"/>
        <UserData display={!this.state.isCompany} update={updateUser} />
        <CompanyData display={this.state.isCompany} update={updateCompany} />
        <button className="sub-log-in-button">register</button>
      </div>
    );
  }

  updateValue(name, value){
    this._state[name] = value;
    this.sync();
    console.log(this._state);
  }

}


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      signInOn : false
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
