$(document).ready(function() {
  const maxChar = $(".counter").text();
  
  $("textarea").keyup(function() {

    const $counter = $(this).closest("form").find(".counter");

    $($counter).text(maxChar - $(this).val().length);
    if ($(this).val().length > maxChar) {
      $($counter).addClass('overfill');
    }
    if ($(this).val().length <= maxChar) {
      $($counter).removeClass('overfill');
    }
  });
});