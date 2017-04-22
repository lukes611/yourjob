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
        <TopBarDesktop toggleMenu={this.toggleMenu.bind(this)}/>
        <div className="app-body-menu" style={menuStyle}>
            <div className="desktop-menu-item">Home</div>
        </div>
      </div>
    );
  }

  toggleMenu(){
    this.setState({displayMenu : !this.state.displayMenu});
  }

  /*updateEntry(newString){
    if(newString.length > 0){
      $.get('/occupations', (data) =>{
        let occupationList = data.occupations;
        this.setState({
          entry : newString,
          suggestions : occupationList.filter(job => job.toLowerCase().includes(newString))
        });
      });
    }else this.setState({entry : newString, suggestions : []});
  }*/
}
