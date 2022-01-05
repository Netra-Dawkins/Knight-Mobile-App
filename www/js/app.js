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

      if (!localStorage.getItem('currentPersonnage')) {
        const perso = createEmptyPerso();
        perso.id = 'empty';
        const dataArray = {};
        dataArray['empty'] = perso;
        localStorage.setItem('personnages', JSON.stringify(dataArray));

        localStorage.setItem('currentPersonnage', 'empty');
      }
      console.log(localStorage.getItem('personnages'));
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

function createEmptyPerso() {
  const perso = {};


  perso['id'] = '';

  perso['genre'] = '';
  perso['armure'] = '';
  perso['nom'] = '';
  perso['surnom'] = '';
  perso['nomIA'] = '';
  perso['archetype'] = '';
  perso['hautFait'] = '';
  perso['section'] = '';
  perso['avantages'] = '';
  perso['inconvenients'] = '';
  perso['motivationMajeure'] = '';
  perso['motivationsMineures'] = '';
  perso['langes'] = '';
  perso['dateNaissance'] = new Date();
  perso['bio'] = '';

  perso['stats'] = {};

  perso['stats']['chair'] = 0;

  perso['stats']['deplacement'] = {};
  perso['stats']['deplacement']['base'] = 0;
  perso['stats']['deplacement']['od'] = 0;

  perso['stats']['force'] = {};
  perso['stats']['force']['base'] = 0;
  perso['stats']['force']['od'] = 0;

  perso['stats']['endurance'] = {};
  perso['stats']['endurance']['base'] = 0;
  perso['stats']['endurance']['od'] = 0;

  perso['stats']['bete'] = 0;

  perso['stats']['hargne'] = {};
  perso['stats']['hargne']['base'] = 0;
  perso['stats']['hargne']['od'] = 0;

  perso['stats']['combat'] = {};
  perso['stats']['combat']['base'] = 0;
  perso['stats']['combat']['od'] = 0;

  perso['stats']['instinct'] = {};
  perso['stats']['instinct']['base'] = 0;
  perso['stats']['instinct']['od'] = 0;

  perso['stats']['machine'] = 0;

  perso['stats']['tir'] = {};
  perso['stats']['tir']['base'] = 0;
  perso['stats']['tir']['od'] = 0;

  perso['stats']['savoir'] = {};
  perso['stats']['savoir']['base'] = 0;
  perso['stats']['savoir']['od'] = 0;

  perso['stats']['technique'] = {};
  perso['stats']['technique']['base'] = 0;
  perso['stats']['technique']['od'] = 0;

  perso['stats']['dame'] = 0;

  perso['stats']['aura'] = {};
  perso['stats']['aura']['base'] = 0;
  perso['stats']['aura']['od'] = 0;

  perso['stats']['parole'] = {};
  perso['stats']['parole']['base'] = 0;
  perso['stats']['parole']['od'] = 0;

  perso['stats']['sangFroid'] = {};
  perso['stats']['sangFroid']['base'] = 0;
  perso['stats']['sangFroid']['od'] = 0;

  perso['stats']['masque'] = 0;

  perso['stats']['discretion'] = {};
  perso['stats']['discretion']['base'] = 0;
  perso['stats']['discretion']['od'] = 0;

  perso['stats']['dexterite'] = {};
  perso['stats']['dexterite']['base'] = 0;
  perso['stats']['dexterite']['od'] = 0;

  perso['stats']['perception'] = {};
  perso['stats']['perception']['base'] = 0;
  perso['stats']['perception']['od'] = 0;

  perso['stats']['defense'] = {};
  perso['stats']['defense']['max'] = 0;
  perso['stats']['defense']['min'] = 0;

  perso['stats']['reaction'] = {};
  perso['stats']['reaction']['max'] = 0;
  perso['stats']['reaction']['min'] = 0;

  perso['stats']['initiative'] = {};
  perso['stats']['initiative']['max'] = 0;
  perso['stats']['initiative']['min'] = 0;

  perso['stats']['cdf'] = {};
  perso['stats']['cdf']['max'] = 0;
  perso['stats']['cdf']['min'] = 0;

  perso['stats']['sante'] = {};
  perso['stats']['sante']['actuel'] = 0;
  perso['stats']['sante']['total'] = 0;

  perso['stats']['espoir'] = {};
  perso['stats']['espoir']['actuel'] = 0;
  perso['stats']['espoir']['total'] = 0;

  perso['stats']['armure'] = {};
  perso['stats']['armure']['actuel'] = 0;
  perso['stats']['armure']['total'] = 0;

  perso['stats']['energie'] = {};
  perso['stats']['energie']['actuel'] = 0;
  perso['stats']['energie']['total'] = 0;

  perso['stats']['heroisme'] = {};
  perso['stats']['heroisme']['actuel'] = 0;
  perso['stats']['heroisme']['total'] = 6;

  perso['stats']['contact'] = {};
  perso['stats']['contact']['actuel'] = 0;
  perso['stats']['contact']['total'] = 0;

  perso['stats']['nodArmure'] = {};
  perso['stats']['nodArmure']['actuel'] = 3;
  perso['stats']['nodArmure']['total'] = 3;

  perso['stats']['nodSoin'] = {};
  perso['stats']['nodSoin']['actuel'] = 3;
  perso['stats']['nodSoin']['total'] = 3;

  perso['stats']['nodEnergie'] = {};
  perso['stats']['nodEnergie']['actuel'] = 3;
  perso['stats']['nodEnergie']['total'] = 3;

  perso['stats']['grenade'] = {};
  perso['stats']['grenade']['actuel'] = 5;
  perso['stats']['grenade']['total'] = 5;

  perso['equipement'] = {};
  perso['note'] = {};

  return perso;
}