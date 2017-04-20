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
  render(){
    return (
      <div>
        <TopBar/>
        <AppBody/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'))
