import React from 'react';
import {render} from 'react-dom';
import TopBar from './top-bar/TopBar.jsx';
import AppBody from './AppBody.jsx';

/*
implement:
  top bar:
    search
    login
    can : activate side-bar, search

*/

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pageDisplay : 'Home'
    };
  }

  render(){
    return (
      <div>
        <TopBar changeDisplay={this.changeDisplay.bind(this)} selectedMenuItem={this.state.pageDisplay}/>
        <AppBody/>
      </div>
    );
  }

  changeDisplay(type){
    this.setState(Object.assign({}, this.state, {pageDisplay : type}));
  }
}

render(<App/>, document.getElementById('app'))
