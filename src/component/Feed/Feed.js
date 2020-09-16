import React, { useEffect, useState } from 'react';
import FeedPost from '../FeedPost/FeedPost';
import './Feed.css';
import Feedbox from './Feedbox';
import db from '../../config';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot((snap) =>
      setPosts(snap.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div className="feed">
      <div className="feedHeader">
        <h2>Home</h2>
      </div>
      <Feedbox />
      {posts.map((post) => (
        <FeedPost
          name={post.name}
          username={post.username}
          image={post.image}
          avatar={post.avatar}
          verified={post.verified}
          text={post.text}
        />
      ))}
    </div>
  );
};

export default Feed;
