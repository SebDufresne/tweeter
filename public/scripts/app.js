/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};

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
    .attr('datetime', tweetData.created_at)
    .text(tweetData.created_at)
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

const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.