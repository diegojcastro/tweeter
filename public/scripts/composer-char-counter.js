$(document).ready(function() {
  const textArea = $('#tweet-text');
  
  textArea.on('input', function(event) {
    // console.log("event fired",this);
    console.log(140-textArea.val().length);

  })
});