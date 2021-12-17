var $ = Dom7;

var device = Framework7.getDevice();
var app = new Framework7({
  name: 'Knight-Mobile-App', // App name
  theme: 'md', // Automatic theme detection
  el: '#app', // App root element
  autoDarkTheme: true,

  touch: {
    tapHold: true, //enable tap hold events
    tapHoldDelay: 500,
    tapHoldPreventClicks: true,
  },

  id: 'io.framework7.myapp', // App bundle ID
  // App store
  store: store,
  // App routes
  routes: routes,


  // Input settings
  input: {
    scrollIntoViewOnFocus: device.cordova && !device.electron,
    scrollIntoViewCentered: device.cordova && !device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (f7.device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
      // let listePersos = [];
      // let perso1 = new Object();
      // perso1.nom = "Perso 1";
      // perso1.armure = "Priest";
      // listePersos.push(perso1);
      // let perso2 = new Object();
      // perso2.nom = "Perso 2";
      // perso2.armure = "Rogue";
      // listePersos.push(perso2);
      // const listeJson = JSON.stringify(listePersos);
      // //localStorage.removeItem('personnages');
      // //localStorage.setItem('personnages', listeJson);
      // console.log(localStorage.getItem('personnages'));
    },
  },
});
// Login Screen Demo
$('#my-login-screen .login-button').on('click', function () {
  var username = $('#my-login-screen [name="username"]').val();
  var password = $('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br/>Password: ' + password);
});
