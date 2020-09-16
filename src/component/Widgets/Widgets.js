import React from 'react';
import './Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';

const Widgets = () => {
  return (
    <div className="widgets">
      <h1>Widgets</h1>

      <div className="tweets">
        <h2>Around The World</h2>

        <TwitterTweetEmbed tweetId={'834285600031256577'} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Zeeshan2k1"
          options={{ height: 600 }}
        />

        <TwitterShareButton
          url="https://www.facebook.com/profile.php?id=100005133649365"
          options={{ text: 'ISTE_Spider Test', via: 'Zeeshan' }}
        />
      </div>
    </div>
  );
};

export default Widgets;
