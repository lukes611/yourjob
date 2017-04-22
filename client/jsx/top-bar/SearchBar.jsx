import React from 'react';

class SearchBar extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      entry : '',
      suggestions : [],
      focussed : false
    };
  }

  render(){


    let guesses = this.state.suggestions;
    let drawGuesses = this.state.suggestions.length > 0 && this.state.focussed;

    return (
      <div className="top-bar-2">
        <div className="top-bar-2-sub">
          <input type="text" value={this.state.entry} onFocus={this.focusInput.bind(this,true)} onBlur={this.focusInput.bind(this,false)} className="top-bar-search-bar" placeholder="Search" onChange={this.updateEntry.bind(this)}></input>
          <button className="top-bar-search-button" onClick={this.doSearch.bind(this,this.state.entry)}>
            <img src="ims/search-icon.png"></img>
          </button>
          <div className="top-bar-search-guess" style={{display : drawGuesses ? 'block' : 'none'}}>
            {guesses.map((g,i) => <div onClick={this.doSearch.bind(this, g)} className="top-bar-search-guess-item" key={i}>{g}</div>)}
          </div>
        </div>
      </div>
    );
  }

  focusInput(focus){
    setTimeout(() => this.setState(Object.assign({}, this.state, {focussed:focus})), 100);
  }

  doSearch(text){
    this.props.search(text);
    this.setState(Object.assign({}, this.state, {entry:text,suggestions:[],focussed:false}));
  }

  updateEntry(e){
    let value = e.target.value;
    let newSuggestions = value.length > 0 ? this.state.suggestions : [];

    this.setState(Object.assign({}, this.state, {entry:value, suggestions : newSuggestions}));
    console.log('wow');

    if(value.length > 0){
      $.get('/occupations', (data) =>{
        let occupationList = data.occupations;
        let newSuggestions = occupationList.filter((job) => job.toLowerCase().includes(value)).filter((x,y)=>y<10);
        this.setState(Object.assign({}, this.state, {suggestions:newSuggestions}));
      });
    }

  }

}


export default SearchBar;
