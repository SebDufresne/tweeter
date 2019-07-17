/* Post new tweet */
$(document).ready(function() {
  $('form').submit(function(event) {
    const $form = $(this);
    
    $.post($form.attr('action'), $form.serialize())
      .fail(error => console.error(error));
    event.preventDefault();
  });
});