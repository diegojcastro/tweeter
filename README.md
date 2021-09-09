# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

It is built with HTML, CSS, SASS, JS, jQuery and AJAX. The focus is on responsive interface design rather than full interactivity, so usernames are randomized and no login functionality is implemented.

Elements of note:
1. Write a new tweet button at the top right of the screen to show/hide and focus the text input area.
1. Accurate character counter that uses a red color to warn the user when they go beyond the 140 character limit.
1. Automatic tweet list update upon posting without requiring a page refresh.
1. Accurate counter for the amount of time since the tweet was posted.
1. "Scroll to top" button appearing upon scrolling down.

## Usage

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Screenshots
!["Small screen layout showing tweet composer and old tweets list."](https://github.com/diegojcastro/tweeter/blob/master/docs/mobile-view.png?raw=true)

!["Wide screen view."](https://github.com/diegojcastro/tweeter/blob/master/docs/wide-view.png?raw=true)

## Dependencies

- Express
- Node 5.10.x or above
