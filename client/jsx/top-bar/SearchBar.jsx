import React from 'react';

class SearchBar extends React.Component{

  constructor(props){
    super(props);

    this._state = {
      what : {entry : '', focussed : false, suggestions : []},
      where : {entry : '', focussed : false, suggestions : []}
    };
    this.state = Object.assign({}, this._state, {occupations : [],locations : ['Brisbane', 'Sydney']});
  }

  componentDidMount(){
    $.get('/occupations', (data) =>{
      this.setState(Object.assign({}, this.state, {occupations : data.occupations}));
    });
  }

  sync(){
    this.setState(Object.assign({}, this.state, this._state));
  }

  render(){

    let what = this.state.what;
    let where = this.state.where;

    let showWhatSuggestions = what.suggestions.length > 0 && what.focussed;
    let showWhereSuggestions = where.suggestions.length > 0 && where.focussed;


    let displayCSS = {display : 'block'};
    let noDisplayCSS = {display : 'none'};
    return (
      <div className="top-bar-2">
        <div className="top-bar-2-sub">
          <div className="job-title-search-area">
            <div className="job-location-search-area-label">
              your-job
            </div>
            <input type="text" value={what.entry} onFocus={this.focusInput.bind(this,'what', true)} onBlur={this.focusInput.bind(this,'what', false)} className="top-bar-search-bar" placeholder="Job Title" onChange={this.updateEntry.bind(this, 'what')}></input>
            <div className="top-bar-search-guess" style={showWhatSuggestions ? displayCSS : noDisplayCSS}>
              {what.suggestions.map((g,i) => <div onClick={this.setEntry.bind(this, 'what', g)} className="top-bar-search-guess-item" key={i}>{g}</div>)}
            </div>
          </div>
          <div className="job-location-search-area">
            <div className="job-location-search-area-label">
              your-location:
            </div>
            <input type="text" value={where.entry} onFocus={this.focusInput.bind(this,'where', true)} onBlur={this.focusInput.bind(this,'where', false)} className="top-bar-search-bar" placeholder="Location" onChange={this.updateEntry.bind(this, 'where')}></input>
            <div className="top-bar-search-guess" style={showWhereSuggestions ? displayCSS : noDisplayCSS}>
              {where.suggestions.map((g,i) => <div onClick={this.setEntry.bind(this, 'where', g)} className="top-bar-search-guess-item" key={i}>{g}</div>)}
            </div>
          </div>
          <div className="job-search-button-container">
            <button className="top-bar-search-button" onClick={this.doSearch.bind(this)}>
              search
            </button>
          </div>
        </div>
      </div>
    );
  }

  focusInput(type, focus){
    this._state[type].focussed = focus;
    setTimeout(() => this.sync(), 200);
  }

  doSearch(){
    console.log('doing search...');
    return 0;
    this.props.search(text);
    this.setState(Object.assign({}, this.state, {entry:text,suggestions:[],focussed:false}));
  }

  setEntry(type, value){
    this._state[type].entry = value;
    this.sync();
  }

  updateEntry(type, e){
    let value = e.target.value;
    let suggestions = [];

    if(value.length > 0){
      if(type == 'what') suggestions = this.state.occupations;
      else suggestions = this.state.locations;

      suggestions = suggestions.filter(function(job){
        return job.toLowerCase().includes(value);
      });
      suggestions = suggestions.filter(function(x,y){
        return y<10;
      });
    }


    this._state[type].entry = value;
    this._state[type].suggestions = suggestions;
    this.sync();
  }

}


export default SearchBar;
