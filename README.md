[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Glyphs Web Application

Glyphs is a web application for developers or anyone interested in browsing specific font styles in real-time. The back-end is developed using Rails specifically to call SQL commands using Postgresql. The front-end is developed using JavaScript and jQuery commands to make calls to the API and display changes for the viewer. Anyone is able to type a sample input of text and view it displayed in a font available through the options provided. To save a font as their favorite, users will have to create an account and sign-in. All accounts, fonts, and favorites are stored using the API.

- [View the client here!](https://discocisco.github.io/glyphs-client)
- [View the API here!](https://font-glyphs.herokuapp.com)

## Technologies used

- Hypertext Markup Language (HTML)
- Cascading Style Sheets (CSS)
- Sass (SCSS)
- JavaScript
- Ajax language
- jQuery
- Bootstrap
- Handlebars
- Git
- cURL
- API [(view the repo here.)](https://github.com/discocisco/glyphs-api)

## Development process and strategy

The focus of this project was to handle one specific feature before writing out the corresponding technologies or languages used for that feature. If no glaring issues were present, the strategic flow went something like:
- Test feature through `cURL` scripts.
- Create necessary forms, buttons, or sections in `index.html` for feature location.
- Write `jQuery` calls that initialize handling of target events.
- Organize and structure the events necessary for the feature.
- Send API calls as necessary to reflect user events in the API given by GA in the back end.
- Display events or text for user interaction on the front end.
- When completed, determine if a file using `.handlebars` would be efficient for readability.
- Style the features and return to the top of flow-chain to ensure feature works as intended with cleaner code.

If the intended feature encountered a bug in any of the steps listed above, workarounds were made starting in the area where the error occured and moving in reverse of the list above until a fix could be applied. Bootstrap was used as the main techology during this process with light use of Sass where appropriate.

## Add-ons for the future

- Save button nested within the font-viewing-tool so that a signed-in user is able to immediately save a font as their favorite without having to open the modal.
- Responsive design for the modal footer in the Favorites modal specifically. Modal footer buttons for `Show`, `Create`, `Update`, and `Delete` do not show on mobile because of wrapping.
- Rather than inputing font details by their ID, allow the user to type in the name of a font (i.e. font name instead of font ID for show etc.)
- Different themes selected by user to test font on dark or light backgrounds

### Wireframes and user stories

1. [ ] [Wireframes located here.](https://imgur.com/a/gKxsgXq)
1. [ ] User stories:
- As a user, I want to create a profile.
- As a user, I want to view fonts with example text in real-time.
- As a user, I want to save my favorite or frequently used fonts.
- As a user, I want select a font for my project and follow a proper link to the location of the font.
