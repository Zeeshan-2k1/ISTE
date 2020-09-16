import React, { useState } from 'react';
import db from '../../config';
import './FeedBox.css';

const Feedbox = () => {
  const [feedMessage, setFeedMessage] = useState('');
  const [feedImage, setFeedImage] = useState('');

  const sendFeed = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: 'Master',
      username: '@master',
      verified: 'true',
      text: feedMessage,
      image: feedImage,
      avatar:
        'https://gumlet.assettype.com/freepressjournal%2F2020-07%2Fa19a7fee-8eef-4215-8bd4-c197fe4a7527%2FEb00vR8UwAADZVS.jpg?rect=0%2C41%2C1080%2C608&format=webp&w=750&dpr=1.0',
    });
    setFeedMessage('');
    setFeedImage('');
  };

  return (
    <div className="feedbox">
      <form>
        <div className="feedboxInput">
          <i className="fas fa-comment fa-3x"></i>
          <input
            value={feedMessage}
            onChange={(e) => setFeedMessage(e.target.value)}
            placeholder="What's Happening?"
            type="text"
          />
        </div>
        <input
          value={feedImage}
          onChange={(e) => setFeedImage(e.target.value)}
          className="feedImage"
          placeholder="Optional: Image URL"
          type="text"
        />
        <button onClick={sendFeed} type="submit" className="feedButton">
          Feed
        </button>
      </form>
    </div>
  );
};

export default Feedbox;
