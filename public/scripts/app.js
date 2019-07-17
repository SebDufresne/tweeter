/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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
  tweets = tweets.reverse();
  for (const tweet of tweets) {
    $('#tweets-container').append(createTweetElement(tweet));
  }
};

const loadTweets = () => {
  $.get('/tweets')
    .then(tweets => renderTweets(tweets))
    .fail(error => console.error(error));
};

const renderLatestTweet = (tweet) => {
  $('#tweets-container').prepend(createTweetElement(tweet));
};

const loadLatestTweet = () => {
  $.get('/tweets')
    .then(tweets => renderLatestTweet(tweets[tweets.length - 1]))
    .fail(error => console.error(error));
};

loadTweets();

/* Post new tweet */
$(document).ready(function() {
  $('form').submit(function(event) {
    const $form = $(this);

    const $inputText = $form.find('textarea[name="text"]');
    const $counterValue = $form.find('span');

    if (!$inputText.val()) {
      alert("Tweet can't be empty");
    } else if ($inputText.val().length > 140) {
      alert("Tweet can't be more than 140 characters");
    } else {
      $.post($form.attr('action'), $form.serialize())
        .then(() => {
          loadLatestTweet();
          $inputText.val('');
          $counterValue.text('140');
        })
        .fail(error => console.error(error));
    }

    event.preventDefault();
  });

  /* Hide and show new Tweet Section */
  $('#writeTweet i').click(function () {
    if ($('.new-tweet').is(':hidden')) {
      $('.new-tweet').slideDown('slow');
      const $textArea = $("textarea[name='text']");
      $textArea.focus();
    } else {
      $('.new-tweet').slideUp('slow');
    }
  });
});