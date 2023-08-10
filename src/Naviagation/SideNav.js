import React from "react";
import "./SideNav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";

const SideNav = () => {
  return (
    <div className="sidenav">
      <img
        className="sidenav-img"
        src="https://s-media-cache-ak0.pinimg.com/originals/d5/1d/09/d51d097fbbd5cdc277d80c605ad1c455.png"
      />
      <div className="sidenav-btns">
        <button className="sidenav-btn">
          <HomeIcon />
          <span>Home</span>
        </button>
        <button className="sidenav-btn">
          <SearchIcon />
          <span>Search</span>
        </button>
        <button className="sidenav-btn">
          <ExploreIcon />
          <span>Explore</span>
        </button>
        <button className="sidenav-btn">
          <SlideshowIcon />
          <span>Reels</span>
        </button>
        <button className="sidenav-btn">
          <ChatIcon />
          <span>Messages</span>
        </button>
        <button className="sidenav-btn">
          <FavoriteBorderIcon />
          <span>Notifications</span>
        </button>
        <button className="sidenav-btn">
          <AddCircleOutlineIcon />
          <span>Create</span>
        </button>
      </div>
      <div className="sidenav-more">
        <button className="sidenav-btn">
          <MenuIcon />
          <span>More</span>
        </button>
      </div>
    </div>
  );
};

export default SideNav;
