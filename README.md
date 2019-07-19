# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

## Final Product

### Desktop Mode - Highlighted item

When hovering over a Tweet, put emphasis on it.

!["Screen capture of highlighting in desktop mode"](https://github.com/SebDufresne/tweeter/blob/master/docs/desktop_highlight_menu.png)

### Tablet Mode - Layout

The page will adapt itself depending on the viewport width.

!["Screen capture of layout in tablet mode"](https://github.com/SebDufresne/tweeter/blob/master/docs/tablet_layout.png)

### Tablet Mode - New Tweet

Upon clicking on the top right arrow will give the opportunity to write a new Tweet.

!["Screen capture of a new tweet in tablet mode"](https://github.com/SebDufresne/tweeter/blob/master/docs/tablet_newTweet.png)

### Tablet Mode - Error Message

In case of too many characters, or an empty tweet, an error message will be displayed.

!["Screen capture of too many characters error in tablet mode"](https://github.com/SebDufresne/tweeter/blob/master/docs/tablet_errorMessage.png)

### Mobile Mode - Back To Top Button

When the user starts scrolling, the top right arrows will disappear and will be replaced by a "bring me back to top" button located on the bottom right, this feature is present in all modes.

!["Screen capture of Back To Top Button in mobile mode"](https://github.com/SebDufresne/tweeter/blob/master/docs/mobile_backToTop_Button.png)

## Dependencies

- Express
- Node 5.10.x or above

## Getting Started

- Install all dependencies (using the `npm install` command).
- Run the development web server using the `node start.js` command.

## Current Limitations/Bugs/Future Features

- BUG: Can't submit a post by simply pressing RETURN.
- BUG: The shadow around the Tweet Button remains there once the form has been submitted.
- BUG: Once in mobile mode, when the screen is further reduced, the text will overflow the container.
- TO-DO: Replace the Tweet demarcation line by an HR instead of styling a border.
- TO-DO: Review the responsive units used in tablet mode.
- TO-DO: Make the error messages more interesting.
