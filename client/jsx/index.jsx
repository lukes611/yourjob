import React from 'react';
import {render} from 'react-dom';
import TopBar from './top-bar/TopBar.jsx';

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
        your job app - body
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'))
