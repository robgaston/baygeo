# GISEC Workshop, February/March 2019
# Publishing web maps and processing spatial data with modern JavaScript

## Instructor

[Rob Gaston](https://www.rgaston.com), web developer @ [Farallon Geographics](https://fargeo.com)

## Schedule

### Day 1, 2/25: Publish your map

- Install dependencies and setup accounts
- Fork & clone repository, update Mapbox GL token
- Deploy your map to GitHub Pages
- Styling basemaps in Mapbox Studio

### Day 2, 3/4: Add your own data

- Acquire and visualize data
- Geo-process data with TurfJS
- Styling custom data

### Day 3, 3/11: Make it interactive

- Add hover popup to map
- Add legend and header
- Share maps

## Getting Started
Install the following dependencies:
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/en/docs/install)

You'll also need a Git client & text editor; if you don't have those, then you should also install the following:
- [Atom](https://atom.io)

You'll also want to [sign-up for Mapbox services here](https://www.mapbox.com/signup/) and, if you haven't already, [create a GitHub account](https://github.com).

Now you can fork & clone [`robgaston/new_map`](https://github.com/robgaston/new_map) to start building your own web map.

After cloning the repo, you'll need to insert your Mapbox public access token ([which can be found here](https://www.mapbox.com/account/)) into `src/settings.json`.

You'll also need to install your package dependencies locally by running the following from the root directory of your cloned repository:
```
yarn install
```

## Development
To run the app locally, run the following from the root directory of your cloned repository:
```
yarn run serve
```

The application should now be running at http://localhost:8080/

Changes that you make to javascript and CSS files will be automatically refreshed!

## Building
Before deploying, you must first build the website by running the following command from the root directory: 
```
yarn run build
```

## Deployment
To deploy your latest code to the web, simply build (as per above) then commit and push your local changes to the `master` branch in Github.
