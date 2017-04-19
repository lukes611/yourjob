import React from 'react';

class SearchBar extends React.Component{
  constructor(props){
    super(props);
  }
  render(){

    let showSuggestions = this.props.suggestions.length > 0;

    return (
      <div className="top-bar-mobile-search-bar">
        <input className="top-bar-mobile-search-bar-input" placeholder="Search" value={this.props.entry} onChange={this.updateEntry.bind(this)} />
        <button className="top-bar-mobile-search-bar-button">
          <img src="ims/search-icon.png"></img>
        </button>
        <div className="top-bar-mobile-s-guess" style={{display : showSuggestions ? 'block' : 'none'}}>
          {this.props.suggestions.map((g,i) => <div key={i}>{g}</div>)}
        </div>
        </div>
    );
  }

  updateEntry(e){
    let value = e.target.value;
    this.props.update(value);
  }
}

export default class TopBarMobile extends React.Component{

  render(){
    return (
      <div className="top-bar-mobile">
        <div className="top-bar-mobile-links-div">
          <div className="top-bar-mobile-links">home</div>
          <div className="top-bar-mobile-links">jobs</div>
          <div className="top-bar-mobile-links">info</div>
          <div className="top-bar-mobile-links" style={{borderRight:'none'}}>profile</div>
        </div>
        <SearchBar update={this.props.update} entry={this.props.entry} suggestions={this.props.suggestions} />
      </div>
    );
  }

}
