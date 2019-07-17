/* Post new tweet */
$(document).ready(function() {
  $('form').submit(function(event) {
    const $form = $(this);

    const inputText = $form.find('textarea[name="text"]').val();

    if (!inputText) {
      alert("Tweet can't be empty");
    } else if (inputText.length > 140) {
      alert("Tweet can't be more than 140 characters");
    } else {
      $.post($form.attr('action'), $form.serialize())
        .fail(error => console.error(error));
    }
    
    event.preventDefault();
  });
});