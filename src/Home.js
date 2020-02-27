import React from "react";
import "./Home.css";

import Tweet from "./components/Tweet/Tweet";
import tweetsData from "./data/tweets";
import accountData from "./data/account";
import profileData from "./data/profile";

const user = {
  screen_name: accountData.username,
  name: accountData.accountDisplayName,
  profile_image_url: profileData.avatarMediaUrl
};

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        {tweetsData.map(tweetData => {
          return (
            <div className="tweet-container">
              <Tweet data={{ ...tweetData.tweet, user }} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Home;
