import React from 'react';

class SearchBar extends React.Component{

  constructor(props){
    super(props);
  }

  render(){


    let guesses = [];
    let drawGuesses = false;

    return (
      <div className="top-bar-2">
        <div className="top-bar-2-sub">
          <input type="text" className="top-bar-search-bar" placeholder="Search" onChange={this.updateEntry.bind(this)}></input>
          <button className="top-bar-search-button">
            <img src="ims/search-icon.png"></img>
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
    console.log('entering...', value);
    //this.props.update(value);
  }

}


export default SearchBar;
