# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

## Final Product

### Desktop Mode - Highlighted item

When hovering over a Tweet, put emphasis on it.

!["screen capture of login menu"](https://github.com/SebDufresne/tinyapp/blob/master/docs/login.png)

### Tablet Mode - Layout

The page will adapt itself depending on the viewport width.

!["screen capture of login menu"](https://github.com/SebDufresne/tinyapp/blob/master/docs/login.png)

### Tablet Mode - New Tweet

Upon clicking on the top right arrow will give the opportunity to write a new Tweet.

!["screen capture of login menu"](https://github.com/SebDufresne/tinyapp/blob/master/docs/login.png)

### Tablet Mode - Error Message

In case of too many characters, or an empty tweet, an error message will be displayed.

!["screen capture of login menu"](https://github.com/SebDufresne/tinyapp/blob/master/docs/login.png)

### Mobile Mode - Layout

Minimalists view optimal for a mobile display.

!["screen capture of login menu"](https://github.com/SebDufresne/tinyapp/blob/master/docs/login.png)

## Dependencies

- Express
- Node 5.10.x or above

## Getting Started

- Install all dependencies (using the `npm install` command).
- Run the development web server using the `node start.js` command.

## Current Limitations/Bugs/Future Features

- BUG: Can't submit a post by simply pressing RETURN.
- BUG: The shadow around the Tweet Button remains there once the form has been submitted.
- TO-DO: Replace the Tweet demarcation line by an HR instead of styling a border.
- TO-DO: Review the responsive units used in tablet mode.