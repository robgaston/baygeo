# <img src="https://cdn.hyperdev.com/us-east-1%3A4de1905f-9bcc-459c-abfd-32ebad23c54c%2F11509357.png" style="width: 100px; margin-right:10px;"/> March 2017 Hack Trip: Palm Springs, CA 🌴

## Schedule: March 5-8, 2017

### Sunday, March 5, 2017:
- **4:00-9:00PM:** Arrive and settle in, discuss goal #1 over drinks and dinner 🍺

### Monday, March 6, 2017:
- **9:00AM-12:00PM:** hack ⌨️
- **12:00-1:00PM:** [lunch 🍴](#food)
- **1:00-4:00PM:** hack 🖥
- **4:00-5:00PM:** break 😅
- **5:00PM-?:** hack 🛠 & [dinner🍴](#food)

### Tuesday, March 7, 2017:
- **9:00AM-12:00PM:** hack 💻
- **12:00-1:00PM:** [lunch 🍴](#food)
- **1:00-4:00PM:** hack 📱
- **4:00-5:00PM:** break 😅
- **5:00PM-?:** hack 🤘 & [dinner🍴](#food)

### Wednesday, March 8, 2017:
- **9:00AM-12:00PM:** Debrief and fly home ✈️

## Priorities

While hacking, please keep in mind these priorities, in order of importance:

1. Listen and learn
2. Share knowledge and techniques
3. Try new things and gain new knowledge/insights
4. Have fun/team building
5. Produce usable code for Arches

Priorities #1-4 are **essential**.  Priority #5 would be nice to have.

## Goals 💯

The broad goal of this hack trip is to prototype some upcoming Arches features.  This will include features that the Arches web app will need to support the mobile app, as well as some features of the Arches mobile app.

As with our last hack trip, we will be hacking on the the Arches code base (inside of [own special hacking fork](https://github.com/fargeo/arches)).  We will also be building a new product, a mobile app, so we will be doing this work in a new repo, [`fargeo/palmsprings`](https://github.com/fargeo/palmsprings).

Our development goals for this trip are as follows:

1. Choose the most promising mobile development platform to hack with.
    - Candidates include:
        - [Cordova](https://cordova.apache.org/docs/en/latest/)
        - [Cordova & Meteor](https://www.meteor.com/articles/build-mobile-applications-with-meteor) (or other framework)
        - [React Native](https://facebook.github.io/react-native/docs/getting-started.html)
        - [NativeScript](https://www.nativescript.org/)
        - Others?
    - Criteria for selection should not be solely what seems most immediately viable, but should also consider the products long term potential as well as "coolness"/"fun" 😎
2. Create a service in Arches to return a Resource Model for the mobile app
    - Should include all related information required to generate a form on the mobile application
    - Should brainstorm other services that may aid mobile app
3. Create a simple mobile application to render Arches Resource Model form
    - Will use selected mobile development platform
    - Should first create basic application scaffold and a main page
    - Will query Arches service referenced in goal #2 to gather information on a given Resource Model
    - Use the response from Arches to generate a Resource Model form, starting with a single card
    - Stretch goals would include:
        - Saving a resource instance
        - Editing a resource instance
        - Rendering a resource instance report

## Teams

Group should be split into two teams working in 1-2 hour sprints on a given task. Teams will check in for 5-15 minutes between each sprint to see where things are at and plan next tasks.

Teams should strive to hack together, on a single machine at a time.  The driver role should rotate every 20-30 minutes and each member should drive at least once per sprint.

If teams feel too large, we can establish a third team around goal 3 to break away from the other two teams.

Members should also feel free to change team membership during the hack day with the agreement of other team members.

## Code organization

Coding will be done in branches of the [`fargeo/arches` fork](https://github.com/fargeo/arches) for Arches work and [`fargeo/palmsprings`](https://github.com/fargeo/palmsprings) for the mobile app work.

Instead of cloning the `fargeo/arches` fork, it is probably much easier to just change remote on your existing arches (commands below under 'Preparation').

Each team will code in a separate branch, merging from each other as needed.

Following the trip, the Arches team will evaluate the value and viability of merging any code from these branches into `master`, and ultimately back into [`archesproject/arches`](https://github.com/archesproject/arches).

## Preparation

Please do the following before arriving:

- re-read this page (it's being updated daily)
- join a team above
- change remote on your local `arches` repo to or clone the [`fargeo/arches` fork](https://github.com/fargeo/arches) locally
    - to change remote, run: `git remote set-url origin https://github.com/fargeo/arches.git`
    - to clone, run: `git clone https://github.com/fargeo/arches.git` - you'll then need to set Arches up as you normally would
- clone the [`fargeo/palmsprings`](https://github.com/fargeo/palmsprings) repo: `git clone https://github.com/fargeo/palmsprings.git`

It's suggested that you read up a bit on the relevant technologies for the team that you'll be working on (see links above).

Here's some recommended reading:
- [Cordova Getting Started Guide](https://cordova.apache.org/#getstarted)
- [Building Mobile Apps with Meteor](https://www.meteor.com/articles/build-mobile-applications-with-meteor)
- [React Native Getting Started Guide](https://facebook.github.io/react-native/docs/getting-started.html)
- [NativeScript Getting Started Guide](http://docs.nativescript.org/tutorial/chapter-0)

## Food

🍴 | **Breakfast/Coffee** | **Lunch/Dinner**
--- | --- | ---
**Walking** | [LINKS HERE...](http://google.com/) | [Farm](http://www.farmpalmsprings.com), [Johannes](http://www.johannesrestaurants.com)
**Driving** | [LINKS HERE...](http://google.com/) | [Adobe Grill](http://www.laquintaresort.com/dine/adobe-grill/)
{:.table}

## Other Activities
- [Wet'n Wild Water Park](https://www.wetnwildpalmsprings.com)
- [Joshua Tree](https://www.nps.gov/jotr/index.htm)
- [Indian Canyons Hike](http://www.indian-canyons.com/palm.html)
