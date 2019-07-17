/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

/*
<article class="tweet">
  <header>
    <img src="https://i.imgur.com/73hZDYK.png" alt="Newton">
    <h3>Newton</h3>
    <p>@SirIsaac</p>
  </header>
  <p>If I have seen further it is by standing on the shoulders of giants</p>
  <footer>
    <p><time datetime="">10 days ago</time></p>
    <div>
      <i class="fas fa-flag fa-xs"></i>
      <i class="fas fa-retweet fa-xs"></i>
      <i class="fas fa-heart fa-xs"></i>
    </div>
  </footer>
</article>
*/

const createTweetElement = tweet => {

  /*
   * Main Structure
   */
  const $tweet = $('<article>').addClass('tweet');
  const $tweet_header = $('<header>');
  const $tweet_content = $('<p>');
  const $tweet_footer = $('<footer>');

  /*
   * Header (Avatar, Name and Handle)
   */

  const $tweet_avatar = $('<img>');
  const $tweet_userName = $('<h3>');
  const $tweet_userHandle = $('<p>');

  $tweet_avatar
    .attr('src', tweet.user.avatars)
    .attr('alt', tweet.user.name);

  $tweet_userName
    .text(tweet.user.name);

  $tweet_userHandle
    .text(tweet.user.handle);

  /* Assembly */
  $tweet_header
    .append($tweet_avatar)
    .append($tweet_userName)
    .append($tweet_userHandle);

  /*
   * Tweet Content
   */

  $tweet_content.text(tweet.content.text);

  /*
   * Footer (CreatedOn and Tools)
   */

  /* Time Section */
  const $tweet_createdOn = $('<p>');
  const $tweet_createdTime = $('<time>');

  const createdAt = new Date(tweet.created_at);

  $tweet_createdTime
    .attr('datetime', createdAt)
    .text(createdAt);

  $tweet_createdOn
    .append($tweet_createdTime);

  /* Tools Section */
  const $tweet_toolBox = $('<div>');

  const $tweet_tools_flag = $('<i>').addClass('fas fa-flag fa-xs');
  const $tweet_tools_reTweet = $('<i>').addClass('fas fa-retweet fa-xs');
  const $tweet_tools_heart = $('<i>').addClass('fas fa-heart fa-xs');

  $tweet_toolBox
    .append($tweet_tools_flag)
    .append($tweet_tools_reTweet)
    .append($tweet_tools_heart);
 
  /* Assembly */
  $tweet_footer
    .append($tweet_createdOn)
    .append($tweet_toolBox);

  /*
   * Tweet Assembly
   */

  $tweet
    .append($tweet_header)
    .append($tweet_content)
    .append($tweet_footer);
  
  return $tweet;
};

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    $('#tweets-container').append(createTweetElement(tweet));
  }
};

renderTweets(data);