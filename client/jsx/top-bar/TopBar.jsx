import React from 'react';
import TopBarDesktop from './TopBarDesktop.jsx';
import TopBarMobile from './TopBarMobile.jsx';

export default class TopBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      entry : '',
      suggestions : []
    };
  }

  render(){
    return (
      <div>
        <TopBarDesktop entry={this.state.entry} update={this.updateEntry.bind(this)} suggestions={this.state.suggestions} />
        <TopBarMobile  entry={this.state.entry} update={this.updateEntry.bind(this)}  suggestions={this.state.suggestions} />
      </div>
    );
  }

  updateEntry(newString){
    let newSuggestions = newString.length == 0 ? [] : ['duck doctor', 'triangle inspector', 'tv executive', 'inspector gadget'];
    newSuggestions.sort(() => Math.random()-0.5);
    this.setState({entry : newString, suggestions : newSuggestions});
  }
}
