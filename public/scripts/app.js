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
    <h3 class="name">Newton</h3>
    <p class="handle">@SirIsaac</p>
  </header>
  <p>If I have seen further it is by standing on the shoulders of giants</p>
  <footer>
    <p><time datetime="">10 days ago</time></p>
    <div class="tools">
      <i class="fas fa-flag fa-xs"></i>
      <i class="fas fa-retweet fa-xs"></i>
      <i class="fas fa-heart fa-xs"></i>
    </div>
  </footer>
</article>
*/

const createTweetElement = function(tweet) {
  const $tweet = $('<article>').addClass('tweet');

  const $header = $('<header>');

  $('<img>')
    .attr('src', tweet.user.avatars)
    .attr('alt', tweet.user.name)
    .appendTo($header);

  $('<h3>')
    .addClass('name')
    .text(tweet.user.name)
    .appendTo($header);

  $('<p>')
    .addClass('handle')
    .text(tweet.user.handle)
    .appendTo($header);

  $tweet.append($header);


  $('<p>')
    .text(tweet.content.text)
    .appendTo($tweet);

  const $footer = $('<footer>');

  const $timeP = $('<p>');

  $('<time>')
    .attr('datetime', new Date(tweet.created_at))
    .text(new Date(tweet.created_at))
    .appendTo($timeP);

  $footer.append($timeP);

  const $divTools = $('<div>').addClass('tools');

  $('<i>')
    .addClass('fas fa-flag fa-xs')
    .appendTo($divTools);

  $('<i>')
    .addClass('fas fa-retweet fa-xs')
    .appendTo($divTools);

  $('<i>')
    .addClass('fas fa-heart fa-xs')
    .appendTo($divTools);

  $footer.append($divTools);

  $tweet.append($footer);

  return $tweet;
};

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    $('#tweets-container').append(createTweetElement(tweet));
  }
};

renderTweets(data);