import React from "react";
import { Avatar } from "@mui/material";
import "./Suggestions.css";

const Suggestions = () => {
  return (
    <div className="suggestions">
      <div className="suggestion-title">Suggestions for you</div>
      <div className="suggestion-usernames">
        <div className="suggestion-username">
          <div className="username-left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username-info">
              <span className="username">kiran</span>
              <span className="relation">New to instagram</span>
            </div>
          </div>
          <button className="follow-btn">Follow</button>
        </div>
      </div>

      <div className="suggestion-username">
        <div className="username-left">
          <span className="avatar">
            <Avatar>R</Avatar>
          </span>
          <div className="username-info">
            <span className="username">kiran</span>
            <span className="relation">New to instagram</span>
          </div>
        </div>
        <button className="follow-btn">Follow</button>
      </div>
      <div className="suggestion-username">
        <div className="username-left">
          <span className="avatar">
            <Avatar>R</Avatar>
          </span>
          <div className="username-info">
            <span className="username">kiran</span>
            <span className="relation">New to instagram</span>
          </div>
        </div>
        <button className="follow-btn">Follow</button>
      </div>
    </div>
  );
};

export default Suggestions;
