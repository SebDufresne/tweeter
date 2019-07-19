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

  /*
  * Test to see if character is 'ENTER'
  * If so, submit form
  * BROKEN: Won't pass through the validation process, can submit empty tweet
  * KEEP DISABLED UNTIL FUTURE FIX
  */
  // $("textarea").keyup(function(key) {
  //   const $form = $(this).closest("form");
  //   const enterKeyCode = 13;

  //   if (key.keyCode === enterKeyCode) {
  //     $form.submit();
  //   }
  // });

});