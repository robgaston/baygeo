# fargeo hack days

just a place to put our code for hack days -- get ready for FUN!

## jan '16

### goals:

* create a small [cordova](https://cordova.apache.org/docs/en/latest/guide/overview/) app showing data from an [arches](https://github.com/archesproject/arches) instance on a map
* two teams: front end & back end
* front end team
  * select libraries for achieving close to native mobile look & feel
  * create a simple map interface to display arches data
* back end team
  * get data from arches web app and store on device
  * serve up data stored on device to client app
* integration: use mechanism built by back end team to display data on map

### setup
requires [nodejs](https://nodejs.org/en/download/)

relevant sdks must be installed to run emulators: [ios](https://developer.apple.com/ios/), [android](http://developer.android.com/sdk/installing/index.html)

```sh
npm install -g cordova ios-sim
cd jan-16
./project.sh
```

### run

```sh
cordova run <platform>
```

`<platform>` should be `ios` or `android`
