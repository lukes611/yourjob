import React from 'react';

class SearchBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {entry : ''};
  }

  render(){

    let drawGuesses = this.state.entry.length > 0;
    let guesses = 'hello,tonka,blue,bird'.split(',');

    return (
      <div className="top-bar-2">
        <div className="top-bar-2-sub">
          <input type="text" className="top-bar-search-bar" placeholder="Search..." onChange={this.updateEntry.bind(this)}></input>
          <button className="top-bar-search-button">
            {/*<img src="ims/search-icon.png"></img>*/}
          </button>
          <div className="top-bar-search-guess" style={{display : drawGuesses ? 'block' : 'none'}}>
            {guesses.map((g,i) => <div key={i}>{g}</div>)}
          </div>
        </div>
      </div>
    );
  }

  updateEntry(e){
    let value = e.target.value;
    this.setState({entry : value});
  }

}


export default SearchBar;
