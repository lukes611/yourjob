import React from 'react';

let SearchBar = (props) => {
  let tmp = 'hello there this is a test do not be panicked'.split(' ');
  tmp = [];
  return (
    <div className="tb-middle-search">
      <input className="tb-middle-search-input" placeholder={props.label} />
      <div className="tb-middle-search-suggestions">
        {tmp.map((x,i) => <div key={i}>{x}</div>)}
      </div>
    </div>
  );
}

export default (props) => {

  return (
    <div className="tb-component">
      <div className="tb-component-1">
        <div className="tb-side">
          <img className="tb-left-logo" src="ims/logo.png"></img>
        </div>
        <div className="tb-middle">
          <SearchBar label="What"/>
          <SearchBar label="Where"/>
        <button className="tb-searchButton">search</button>
        </div>
        <div className="tb-side">
          <button className="tb-right-signInButton" >sign in</button>
        </div>
      </div>
      <div className="tb-component-2">menu</div>
    </div>
  );
}
