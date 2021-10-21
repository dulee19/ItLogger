import React from "react";

const SearchBar = () => {
  return (
    <nav style={navStyle} className="red">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input type="search" />
            <label htmlFor="search" className="label-icon">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

const navStyle = {
  marginBottom: "20px",
};

export default SearchBar;
