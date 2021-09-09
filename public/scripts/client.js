/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

function createTweetElement(obj) {
  const $parsedTweet = $(`
<article class="tweet">
  <header>
    <div>
      <img class="avatar" src=${obj.user.avatars}></img>
      <div class="display-name">${obj.user.name}</div>
    </div>
    <div class="handle">${obj.user.handle}</div>
  </header>
  <p>${escape(obj.content.text)}</p>
  <div class="separator"></div>
  <footer>
    <div class="time-since-post">${timeago.format(obj.created_at)}</div>
    <div class="icons">
      <i class="fas fa-flag"></i>
      <i class="fas fa-retweet"></i>
      <i class="fas fa-heart"></i>
    </div>
  </footer>
</article>`);
  return $parsedTweet;
};

function renderTweets(arr) {
  $('#all-tweets').empty();
  for (const tweet of arr) {
    const $twt = createTweetElement(tweet);
    $('#all-tweets').append($twt);
  }
};

function loadTweets() {
  $.get( "/tweets/", function( data ) {
    renderTweets(data);
  });
};

// Document.ready
$(function() {
  $('#error-msg').hide();
  $('#scroll-up-button').hide();

  let newTweetHidden = false;

  // Write a new tweet button:
  $('#write-new-area').on('click', function(event) {
    // Toggle show/hide on new tweet form
    if (newTweetHidden) {
      newTweetHidden = false;
      $('#new-tweet').slideDown();
      // Focus text input on new tweet form
      $('#tweet-text').focus();
    } else {
      newTweetHidden = true;
      $('#new-tweet').slideUp();
    }
    
  })

  // Same as .on('submit') listener
  $('#new-tweet-form').submit(function(event) {
    event.preventDefault();
    const $textArea = $('#tweet-text');
    const tweetLength = $textArea.val().length;
    // Check for illegal submission: too many chars
    if (tweetLength > 140) {
      $('#tweet-text').addClass('error');
      return;
    }
    // Check for illegal submission: empty tweet
    if (!tweetLength) {
      $('#tweet-text').addClass('error');
      $('#error-msg').show();
      return;
    }
    $('#tweet-text').removeClass('error');
    const serializedText = $textArea.serialize();
    $textArea.val('');

    $.post('/tweets/', serializedText).then(loadTweets());
    
  })

  // Change button pointer to finger
  $('.button').css( 'cursor', 'pointer' );

  // Hide "scroll up button" when at the top of the page
  $(window).scroll( function(event) {
    if ($(window).scrollTop() > 0) {
      $('#scroll-up-button').show();
    } else {
      $('#scroll-up-button').hide();
    }
  })

  // Take us to the top of the page on click
  $('#scroll-up-button').click( function(event) {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
  })

  loadTweets();

});
