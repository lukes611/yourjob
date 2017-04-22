import React from 'react';
import TopBarDesktop from './TopBarDesktop.jsx';

/*
TopBar handles:

search (hits enter or clicks button)
go-to site
change display
toggling menu


*/

export default class TopBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      displayMenu : false
    };
  }

  render(){
    let menuStyle = {
      display : this.state.displayMenu ? 'block' : 'none'
    };
    return (
      <div>
        <TopBarDesktop toggleMenu={this.toggleMenu.bind(this)} search={this.doSearch.bind(this)}/>
        <div className="app-body-menu" style={menuStyle}>
            <div className="desktop-menu-item">Home</div>
            <div className="desktop-menu-item">About</div>
            <div className="desktop-menu-item">Jobs</div>
            <div className="desktop-menu-item">Contact Us</div>
        </div>
      </div>
    );
  }

  toggleMenu(){
    this.setState({displayMenu : !this.state.displayMenu});
  }

  doSearch(text){
    console.log('searching for ', text, 'videos');
  }

  

}
