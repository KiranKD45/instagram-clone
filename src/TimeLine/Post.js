import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const Post = ({ user, likes, postImage, timestamp }) => {
  return (
    <div className="post">
      <div className="post-header">
        <div className="post-headerauthor">
          <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
          <p className="post-name">{user}</p> • <span>{timestamp}</span>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="post-image">
        <img className="post-image-main" src={postImage} />
      </div>
      <div className="post-footer">
        <div className="post-footerIcons">
          <div className="post-icon-main">
            <FavoriteBorderIcon className="post-icon" />
            <ChatBubbleOutlineIcon className="post-icon" />
            <TelegramIcon className="post-icon" />
          </div>
          <div className="post-icon-save">
            <BookmarkBorderIcon className="post-icon" />
          </div>
        </div>
        Liked by {likes} people.
      </div>
    </div>
  );
};

export default Post;
