/*
* Section With Event Listeners (active once document is ready)
*/
$(document).ready(function() {
  
  /*
  * Count the number of characters in the textarea
  * If there's more than the MAX_CHAR (defined in app.js)
  * Add class overfill to the counter element
  */
  $("textarea").keyup(function() {

    const $counter = $(this).closest("form").find(".counter");

    $($counter).text(MAX_CHARS - $(this).val().length);
    if ($(this).val().length > MAX_CHARS) {
      $($counter).addClass('overfill');
    }
    if ($(this).val().length <= MAX_CHARS) {
      $($counter).removeClass('overfill');
    }
  });
});