import React from 'react';
import './FeedPost.css';

const FeedPost = ({ name, username, verified, text, image, avatar }) => {
  return (
    <div className="post">
      <div className="header">
        <div className="postAvatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="headerText">
          <h1>
            {name + ' '}
            <span style={{ fontSize: '1rem' }}>
              {verified && <i class="fas fa-user-check fa-small" />} {username}
            </span>
          </h1>
        </div>
      </div>
      <div className="postBody">
        <div className="postDetail">
          <p>{text}</p>
        </div>
      </div>
      <img className="postImage" src={image} alt="post" />

      <div className="footer">
        <i class="fas fa-comments fa-2x"></i>
        <i class="fas fa-angle-double-up fa-2x"></i>
        <i class="fas fa-heart fa-2x"></i>
        <i class="fas fa-share fa-2x"></i>
      </div>
    </div>
  );
};

export default FeedPost;
