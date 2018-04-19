# <img src="img/fargeo.png" style="width: 100px; margin-right:10px;"/> April 2018 Hack Trip: South Lake Tahoe 🏔

## Schedule: April 22-25, 2018

### Sunday, April 22, 2018:
- **4:00-9:00PM:** Arrive and settle in, discuss our goals over drinks and dinner 🍺

### Monday, April 23, 2018:
- **9:00AM-12:00PM:** hack ⌨️
- **12:00-1:00PM:** [lunch 🍴](#food)
- **1:00-4:00PM:** hack 🖥
- **4:00-5:00PM:** break 😅
- **5:00PM-?:** hack 🛠 & [dinner🍴](#food)

### Tuesday, April 24, 2018:
- **9:00AM-12:00PM:** hack 💻
- **12:00-1:00PM:** [lunch 🍴](#food)
- **1:00-4:00PM:** hack 📱
- **4:00-5:00PM:** break 😅
- **5:00PM-?:** hack 🤘 & [dinner🍴](#food)

### Wednesday, April 25, 2018:
- **9:00AM-12:00PM:** Debrief and head home 🚘

## Priorities

While hacking, please keep in mind these priorities, in order of importance:

1. Listen and learn
2. Share knowledge and techniques
3. Try new things and gain new knowledge/insights
4. Have fun/team building
5. Produce usable code or demos

Priorities #1-4 are **essential**.  Priority #5 would be nice to have.

## Goals 💯

The goal of this hack trip will be to jointly develop a new Arches package.  Going through this process should help us:
- identify problem areas or potential improvements in key Arches functionalities, including:
	- package creation process
	- development of datatypes, widgets and functions
	- integration with external systems
- help individual developers gain a broader understanding of Arches (and Arches package development)
- prototype integrations and/or use cases that could be helpful in demoing Arches
- prototype a package that might actually be useful

Along the way, keep in mind that this is an opportunity to gain a broader understanding of Arches as well as share your unique knowledge of Arches with your fellow developers.  We should also strive to capture potential improvements and enhancements to Arches as tickets in [GitHub](https://github.com/archesproject/arches).

The use case that we will be targeting in this hack trip will be address management, similar to the San Francisco EAS.  We should strive to make this exercise as real-world as possible, therefore, we should plan to use real SF address, parcel and street data in our efforts:
- addresses with units: [source](https://data.sfgov.org/Geographic-Locations-and-Boundaries/Addresses-with-Units-Enterprise-Addressing-System-/dxjs-vqsy)
- parcels: [source](https://data.sfgov.org/Geographic-Locations-and-Boundaries/Recorded-Parcel-Geography-with-Transaction-Date-Hi/3iun-6we5), [ESRI service](https://services8.arcgis.com/jXmOK21AXdxcpkCM/arcgis/rest/services/San_Francisco_Parcels_20180416/FeatureServer/0?token=tTzVkJ7RPpZmqmlxc7xVBaORWK8vIKQenSkbmK13OnDfIHNKaNCIaH3i6Nz1AUbdnqkEsz8HuA-QqYrndP4yyqgov0NUgabK3lOO19erL-YYPtbIhEzahbSeQ0wPkJx1TH7RVL-gJ9m3iBsV9Affr0NczrLunSdj6rsa1Kg4QI8fTWpdgj0VCy7FaANWggjI6b7kDATtb43W9-hHxmndcjEU9S7lBzCfTty1b4GnAF3dmYhoh4ZBLC-XpsLetKEJ)
- street centerlines: [source](https://data.sfgov.org/Geographic-Locations-and-Boundaries/San-Francisco-Basemap-Street-Centerlines/7hfy-8sz8), [ESRI service](https://services8.arcgis.com/jXmOK21AXdxcpkCM/arcgis/rest/services/San_Francisco_Basemap_Street_Centerlines/FeatureServer/0?token=1eVJHuG13ctW2abP4MTfWdgbD0mrgiPZ6EvONk3YDAxIBScX36iwyTHGKklFTAVLxWaSXwhDbicB4en-6x_JYdanK5ZgYnX0C-qzDOnh6X4rcVVx1UoOhzs-xi2E2v00yagXR7NwhrPcl4e2KyEdQI_0_Zy_WGyIXsN-5g6MAPKvV3g-N4HYjDUounZUOcxZCdNBz6vmHd-KAFBZSfVEnSi_TFmYC1MaMGWP48lDZMZcqw183ciKwCB_Y9CMh-8U)
- street names: [source](https://data.sfgov.org/Geographic-Locations-and-Boundaries/Street-Names/6d9h-4u5v)

The goal will be to develop an Arches package that will allow for the management of address data (including units) as resource instances and the integration thereof with related GIS entities, specifically parcels and streets.  Parcels and streets would ideally be represented in an external system (such as ESRI's cloud-based solution) that Arches could directly integrate with.  If this is deemed to not be feasible within the scope of our hack trip, we can instead opt to somehow host these data locally (for example, in PostGIS) for use in Arches.

There are at least three tracks that we can structure our work around:
- data modeling and import
- development of datatypes, widgets, and functions
- visualization of data, esp. on the mapping interfaces (search and editing)

Alternatively, we might organize ourselves instead around management of individual entities (and the development of related datatypes, widgets, etc):
- parcels
- streets
- addresses and units

A great outcome of this effort would be a live demo of the resultant package on the web that could be used for testing and demo purposes.

## Teams

Group should be split into two or more teams working in 1-2 hour sprints on a given task. Teams will check in for 5-15 minutes between each sprint to see where things are at and plan next tasks.

Teams should strive to hack together, on a single machine at a time.  The driver role should rotate every 20-30 minutes and each member should drive at least once per sprint.

Members should feel free to change team membership or reorganize teams as needed during the hack day.

## Code organization

Coding will be done in branches of the [`fargeo/southlake`](https://github.com/fargeo/southlake) repo.

Each team will code in a separate branch, merging into `master` as needed.

Should we decide/need to do core Arches development, that work will be done in branches of the [`fargeo/arches` fork](https://github.com/fargeo/arches).

Instead of cloning the `fargeo/arches` fork, it is probably much easier to just [change remote](#preparation) on your existing local arches repo.

After the trip, you can change your Arches repo's remote back with the following command:
```
git remote set-url origin git@github.com:archesproject/arches.git
```

## Preparation

Please do the following before arriving:

- re-read this page (it's being updated daily)
- add or suggest food/drink places and/or activities (below)
- change your arches repo remote to point to [`fargeo/arches`](https://github.com/fargeo/arches) and checkout the `southlake` branch:
```
git remote set-url origin git@github.com:fargeo/arches.git
git fetch
git checkout southlake
```
- clone the [`fargeo/southlake`](https://github.com/fargeo/southlake) repo
- create a new local project and load the `fargeo/southlake` package:
```
arches-project create sltproject
cd sltproject
python manage.py packages -o load_package -s https://github.com/fargeo/southlake/archive/master.zip -db true
```
- think about the address management use case in the context of Arches:
	- how to model data?
	- datatypes/widgets?
	- functions?
	- integrations?

## Food

🍴&🍻 | **Breakfast/Coffee** | **Lunch/Dinner** | **Booze**
--- | --- | --- | ---
**Walking** | [Black Cabin Coffee](http://www.blackcabincoffee.com/) | [Himmel Haus](https://www.himmelhausslt.com) | [Himmel Haus](https://www.himmelhausslt.com)
**Driving** |  | [MacDuffs](http://macduffspub.com) | 
{:.table}
