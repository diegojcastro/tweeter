$(document).ready(function() {
  const textArea = $('#tweet-text');
  
  textArea.on('input', function(event) {
    // console.log("event fired",this);
    const numChars = 140-textArea.val().length;
    console.log(numChars);
    const counter = $(this).closest("form").find(".counter");
    counter.val(numChars);

    if (parseInt(counter.val()) < 0) {
      counter.css('color', 'red');
    } else {
      counter.css('color', '');
    }


  })
});