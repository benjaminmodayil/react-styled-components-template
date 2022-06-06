# Getting Started

- To install the project's dependencies `npm install`
- To start the repository on http://localhost:3000 `npm start`
- To run cypress tests `npm run cypress-gui`

## Icon usage:

- icons are from Heroicons, https://heroicons.com, documentation: https://github.com/tailwindlabs/heroicons#react

## Font

- Font is merriweather (https://fonts.google.com/specimen/Merriweather?query=merriweather)

## Things to watch out for

You need to handle:

- error states
- loading states
- no data states
- modal logic must be closable via ESC and clicking on the outside overlay
- handle date formatting using date-fns package
- verify API mock works in cypress test (these don't necessarily work... and might not be tested)
