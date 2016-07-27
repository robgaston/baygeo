define(['firebase'], function (firebase) {
  var config = {
    apiKey: "AIzaSyACNZR_bW_VoriSzHqnJQ94fNXLGJ44_Gw",
    authDomain: "hack-day-56a53.firebaseapp.com",
    databaseURL: "https://hack-day-56a53.firebaseio.com",
    storageBucket: "hack-day-56a53.appspot.com",
  };
  firebase.initializeApp(config);
  return firebase.database();
});
