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
      </div>
    );
    //<TopBarMobile  entry={this.state.entry} update={this.updateEntry.bind(this)}  suggestions={this.state.suggestions} />
  }

  updateEntry(newString){
    if(newString.length > 0){
      $.get('/occupations', (data) =>{
        let occupationList = data.occupations;
        this.setState({
          entry : newString,
          suggestions : occupationList.filter(job => job.toLowerCase().includes(newString))
        });
      });
    }else this.setState({entry : newString, suggestions : []});
  }
}
