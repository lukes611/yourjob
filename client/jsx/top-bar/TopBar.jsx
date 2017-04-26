import React from 'react';
import TopBarDesktop from './TopBarDesktop.jsx';
import MenuItem from './MenuItem.jsx';
/*
TopBar handles:

search (hits enter or clicks button) [done]
go-to site []
change display
toggling menu [done]

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
    let menuList = 'Home,About,YourPhilosophy,Contact Us'.split(',');

    return (
      <div>
        <TopBarDesktop changeDisplay={this.props.changeDisplay} selectedMenuItem={this.props.selectedMenuItem} toggleMenu={this.toggleMenu.bind(this)} search={this.doSearch.bind(this)}/>
        <div className="app-body-menu" style={menuStyle}>
            {menuList.map((name,i) => <MenuItem key={i} text={name} changeDisplay={this.changeDisplay.bind(this)} selectedMenuItem={this.props.selectedMenuItem}/>)}
        </div>
      </div>
    );
  }

  changeDisplay(name){
    this.props.changeDisplay(name);
    this.toggleMenu();
  }

  toggleMenu(){
    this.setState({displayMenu : !this.state.displayMenu});
  }

  doSearch(text){
    console.log('searching for ', text, 'videos');
  }



}
