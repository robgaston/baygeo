# <img src="https://cdn.hyperdev.com/us-east-1%3A4de1905f-9bcc-459c-abfd-32ebad23c54c%2F11509357.png" alt="Drawing" style="width: 100px; margin-right:10px;"/> 2016 Hack Trip: Santa Cruz, CA 🏖

## Schedule: August 2-4, 2016

### Tuesday, August 2, 2016:
- **12:00PM:** meet @ [99 Bottles of Beer on the Wall 🍺](https://www.google.com/maps/place/99+Bottles+Of+Beer+On+The+Wall/@36.9735678,-122.0288055,17z/data=!3m1!4b1!4m5!3m4!1s0x808e402628a41b47:0x49097c3499bea3de!8m2!3d36.9735678!4d-122.0266168)
- **12:00-1:00PM:** lunch 🍔🍴
- **1:00-4:00PM:** hack 💻
- **4:00-5:00PM:** break, check in ➡️🚪 @ [house 🏠](https://www.google.com/maps?ion=1&espv=2&q=116+Cedar+Street,+Santa+Cruz,+CA&bav=on.2,or.r_cp.&biw=1920&bih=1102&dpr=2&um=1&ie=UTF-8&sa=X&ved=0ahUKEwj7456Ul5TOAhWE5oMKHZrhAfAQ_AUIBigB)
- **5:00PM-?:** hack 🛠

### Wednesday, August 3, 2016:
- **9:00AM-12:00PM:** hack ⌨️
- **12:00-1:00PM:** lunch 🍕🍴
- **1:00-4:00PM:** hack 🖥
- **4:00-5:00PM:** break 😅
- **5:00PM-?:** hack 🤘

### Thursday, August 4, 2016:
- **9:00-11:00AM:** hack 📱
- **11:00AM:** check out 🚪➡️
- **11:00AM-3:00PM:** lunch 🌮🍴, hack and debrief @ [99 Bottles of Beer on the Wall 🍺](https://www.google.com/maps/place/99+Bottles+Of+Beer+On+The+Wall/@36.9735678,-122.0288055,17z/data=!3m1!4b1!4m5!3m4!1s0x808e402628a41b47:0x49097c3499bea3de!8m2!3d36.9735678!4d-122.0266168)


## Goals 💯

The broad goal of this hack trip is to prototype some upcoming Arches features.

Unlike previous hack days, this time we will be hacking on the the Arches code base (inside of [a separate fork](https://github.com/fargeo/arches)).

There are two main (related) target features, and one stretch goal:

1. Integrate a tile server solution into Arches using **[tilezen/TileStache](https://github.com/tilezen/TileStache)**.  [This gist](https://gist.github.com/rburhum/4559323) may be helpful in integrating with Django.  The solution should include support for:
    - serving custom imagery
    - generating image tiles of arches resource data (GeoJSON stored in `tiles`) probably using [mapnik](http://mapnik.org/)
    - generating [mapbox vector tiles (pbf)](https://www.mapbox.com/vector-tiles/specification/)
2. Prototype a map widget for use in Arches forms using **[Mapbox GL](https://www.mapbox.com/mapbox-gl-js/api/)**.  Including:
    - features represented in latest map widget [mockup](http://archesproject.github.io/mockups/arches_widgets.html)
    - support for custom base maps (non-mapbox)
    - support for editing vector data
    - support for displaying vector tiles served up by Arches
3. *Stretch Goal:* Support for 3d geometries. A prototype solution for both:
    - storing 3d geometry data in Arches `tiles`
    - displaying 3d geometries on a web map

## Code organization

Coding will be done in branches of the [`fargeo/arches` fork](https://github.com/fargeo/arches).

Each team will code in a separate branch, merging from each other as needed.

At the end of the trip, the group will evaulate the viability of merging any code from these branches into `master`, and ultimately back into [`archesproject/arches`](https://github.com/archesproject/arches).

## Preparation

Please do the following before arriving:
- re-read this page (it's being updated daily)
- join a team below
- clone the [`fargeo/arches` fork](https://github.com/fargeo/arches) locally and set it up as you normally would
- [install mapnik](http://mapnik.org/pages/downloads.html) (`brew update && brew install mapnik` on macOS)

It's suggested that you read up a bit on the relevant technologies for the team that you'll be working on (see links above).

It also would be helpful if someone could prepare some mock resource data (`tiles`) to test serving up `tiles` (ie GeoJSON stored in a postgres JSON column) via the tile server.

## Teams

Group should be split into two teams running on parallel tracks pushing towards goals 1 & 2.

Goal 3 can be pursued by both teams as time permits.

Hacking should be done in 1-2 hour sprints with teams checking in for 5-10 minutes between each sprint.

Teams should strive to hack together, on a single machine at a time.  The driver role should rotate every 20-30 minutes and each member should drive at least once per sprint.

If teams feel too large, we can establish a third team around goal 3 to break away from the other two teams.

Members should also feel free to change team membership during the hack day with the agreement of other team members.

Teams are as follows **(drag & drop your name onto a team to join)**:
