$(document).ready(function() {
  const textArea = $('#tweet-text');
  
  textArea.on('input', function(event) {
    const numChars = 140-textArea.val().length;
    const counter = $(this).closest("form").find(".counter");
    counter.val(numChars);

    if (parseInt(counter.val()) < 0) {
      counter.css('color', 'red');
      textArea.addClass('error');
      $('#error-msg').show();
    } else {
      counter.css('color', '');
      textArea.removeClass('error');
      $('#error-msg').hide();

    }
  })
});