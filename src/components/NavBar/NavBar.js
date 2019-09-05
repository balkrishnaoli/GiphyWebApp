import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="ui secondary menu container">
        <Link to="/">
          <img
            src="https://www.vectorlogo.zone/logos/giphy/giphy-ar21.svg"
            alt=""
          ></img>
        </Link>
        <SearchBar />
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/Reactions" className="item">
          Reactions
        </Link>
        <Link to="/Entertainment" className="item">
          Entertainment
        </Link>
        <Link to="/Sports" className="item">
          Sports
        </Link>
        <Link to="/Stickers" className="item">
          Stickers
        </Link>
        <Link to="/Artists" className="item">
          Artists
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
