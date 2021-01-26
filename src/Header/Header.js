import {
  FlashOn,
  Home,
  LiveTv,
  PersonOutline,
  Search,
  VideoLibrary,
} from "@material-ui/icons";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icon header__icon--active">
          <Home />
          <p>Home</p>
        </div>
        <div className="header__icon">
          <FlashOn />
          <p>Trending</p>
        </div>
        <div className="header__icon">
          <LiveTv />
          <p>Verified</p>
        </div>
        <div className="header__icon">
          <VideoLibrary />
          <p>Collections</p>
        </div>
        <div className="header__icon">
          <Search />
          <p>Search</p>
        </div>
        <div className="header__icon">
          <PersonOutline />
          <p>Accout</p>
        </div>
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hulu_Logo.svg/1200px-Hulu_Logo.svg.png"
        alt=""
      />
    </div>
  );
}

export default Header;
