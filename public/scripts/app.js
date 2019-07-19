/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


 /*
 * Frequently used pointers
 */
const MAX_CHARS = 140;
const $button_backToTop = '.backToTop';
const $button_writeTweet = '#writeTweet';

/*
* Create the HTML body of a new tweet
*/
const createTweetElement = tweet => {

  /*
   * Main Structure
   */
  const $tweet = $('<article>').addClass('tweet');
  const $tweet_header = $('<header>');
  const $tweet_body = $('<body>');
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

  /* Header Assembly */
  $tweet_header
    .append($tweet_avatar)
    .append($tweet_userName)
    .append($tweet_userHandle);

  /*
   * Tweet Body
   */

  const $tweet_content = $('<p>');

  $tweet_content.text(tweet.content.text);

  $tweet_body
    .append( $tweet_content);

  /*
   * Footer (CreatedOn and Tools)
   */

  /* Time Section */
  const $tweet_createdOn = $('<p>');
  const $tweet_createdTime = $('<time>');

  const createdAt = new Date(tweet.created_at);

  $tweet_createdTime
    .attr('datetime', createdAt)
    .text(jQuery.timeago(createdAt)); /* Converts time a a readable string */

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
 
  /* Footer Assembly */
  $tweet_footer
    .append($tweet_createdOn)
    .append($tweet_toolBox);

  /*
   * Tweet Assembly
   */

  $tweet
    .append($tweet_header)
    .append($tweet_body)
    .append($tweet_footer);
  
  return $tweet;
};

/*
* Append an array of tweets at the end of #tweets-container
* in reverse order than they were received
*/

const renderTweets = function(tweets) {
  tweets = tweets.reverse();
  for (const tweet of tweets) {
    $('#tweets-container').append(createTweetElement(tweet));
  }
};

/*
* Load all tweets
*/
const loadTweets = () => {
  $.get('/tweets')
    .then(tweets => renderTweets(tweets))
    .fail(error => console.error(error));
};

loadTweets(); /* Load all tweets manually */

/*
* Prepend a given tweet at the beginning of #tweets-container
*/

const renderLatestTweet = (tweet) => {
  $('#tweets-container').prepend(createTweetElement(tweet));
};

/*
* Retrieve last (most recent) tweet in the Tweet storage array
*/

const loadLatestTweet = () => {
  $.get('/tweets')
    .then(tweets => renderLatestTweet(tweets[tweets.length - 1]))
    .fail(error => console.error(error));
};

/*
* Hide error section
* Set the message
* Display error section
*/
const showError = (error) => {
  $('.hidden.error').slideUp(400, () => {  /* Hide Section*/

    const $errorMsg = $('.error-container h1');
    $errorMsg.text(error);
 
    $('.hidden.error').slideDown(); /* Display Section*/
  });
};

/*
* Hide error section
*/
const hideError = () => {
  $('.hidden.error').slideUp();
};


/*
* Section With Event Listeners (active once document is ready)
*/
$(document).ready(function() {

  /*
  * Post new tweet
  */
  $('form').submit(function(event) {
    const $form = $(this);

    const $inputText = $form.find('textarea[name="text"]');
    const $counterValue = $form.find('span');

    if (!$inputText.val()) {
      showError("Can't be empty");
    } else if ($inputText.val().length > MAX_CHARS) {
      showError(`No more than ${MAX_CHARS} characters`);
    } else {
      $.post($form.attr('action'), $form.serialize())
        .then(() => {
          hideError();
          loadLatestTweet();
          $inputText.val('');
          $counterValue.text(`${MAX_CHARS}`);
        })
        .fail(error => console.error(error));
    }

    event.preventDefault();
  });

  /*
  * Hide and show New Tweet Section
  */
  $('#writeTweet i').click(function () {
    if ($('.new-tweet').is(':hidden')) {
      $('.new-tweet').slideDown('slow');
      const $textArea = $("textarea[name='text']");
      $textArea.focus();
    } else {
      $('.new-tweet').slideUp('slow');
    }
  });


  /*
  * Listen to Scroll Event on Document
  * Hide and Show Buttons to move around the page
  */
  $(document).scroll(function() {

    if ($(window).scrollTop() !== 0) {
      $($button_writeTweet).hide();
      $($button_backToTop).show();
    } else {
      $($button_writeTweet).show();
      $($button_backToTop).hide();
    }
  });


  $($button_backToTop).click(function() {
    window.scrollTo(0, 0);
  });
});