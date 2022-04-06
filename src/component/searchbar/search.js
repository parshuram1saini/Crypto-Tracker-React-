import React from "react";
import "./search.css";

// section is for  change-order...................
function Search(props) {
  return (
    <>
      <div className="ui fluid category search">
        <div id="searchbar" className="ui icon input">
          <i className="search icon"></i>
          <input
            className="prompt"
            type="text"
            placeholder="Search Currency...................."
            onKeyUp={(e) => props.handlesearch(e.target.value)}
          ></input>
        </div>
        <button
          className="ui inverted violet button"
          onClick={() => props.handlebutton()}
        >
          Change-Order
        </button>
      </div>
    </>
  );
}

export default Search;
