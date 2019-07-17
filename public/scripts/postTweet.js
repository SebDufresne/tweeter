/* Post new tweet */
$(document).ready(function() {
  $('form').submit(function(event) {
    const $form = $(this);

    const $inputText = $form.find('textarea[name="text"]');

    if (!$inputText.val()) {
      alert("Tweet can't be empty");
    } else if ($inputText.val().length > 140) {
      alert("Tweet can't be more than 140 characters");
    } else {
      $.post($form.attr('action'), $form.serialize())
        .fail(error => console.error(error));
      $inputText.val('');
    }

    event.preventDefault();
  });
});