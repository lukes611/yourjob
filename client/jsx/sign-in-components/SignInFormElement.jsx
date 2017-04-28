import React from 'react';

/*
  keeps state, keeps local-storage,
*/
export default class SignInFormElement extends React.Component{
  constructor(props){
    super(props);
    this._state = {
      value : ''
    };
    this.state = Object.assign({}, this._state);
  }

  sync(){
    this.setState(Object.assign({}, this._state));
  }

  render(){

    let error = null;
    if(this.props.showError)
      error = (
        <div className="sub-log-in-label-error">{this.props.error}</div>
      );

    if(this.props.type == 'checkbox'){
      return (
        <div className="sub-log-in-label sub-log-in-label-remember-me" >
          {this.props.label}:
          <input className="sub-log-in-cb" type="checkbox" onChange={this.update.bind(this)} />

        </div>
      );
    }

    return (
      <div>
        <div className="sub-log-in-label">{this.props.label}: </div>
        {error}
        <input className="sub-log-in-input" type={this.props.type} onChange={this.update.bind(this)} />
      </div>
    );
  }

  retrieveValue(element){
    if(this.props.type == 'checkbox'){
      return element.target.checked;
    }
    return element.target.value;
  }

  update(element){
    let value = this.retrieveValue(element);
    this._state.value = value;
    this.sync();
    let name = this.props.name || this.props.label;
    this.props.update(name, this._state.value);
  }

}
SignInFormElement.defaultProps = {
  type : 'text',
  name : null,
  label : "input sth",
  update : function(label, value){
    console.log('doing nothing when updating: ', label, 'to', value);
  },
  showError : false,
  error : 'please enter a value'
};
