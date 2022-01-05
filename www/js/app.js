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

function setDefaultPersoValues(perso, isAspect, category, specificationTab) {
  switch (category) {
    case 'stats':
      if (isAspect === true) {
        specificationTab.forEach(specification => {
          perso['stats'][specification] = 0;
        })
      } else {
        specificationTab.forEach(specification => {
          perso['stats'][specification] = {};
          perso['stats'][specification]['base'] = 0;
          perso['stats'][specification]['od'] = 0;
        })
      }
      break;
    case 'equipement':
      specificationTab.forEach(specification => {
        perso['equipement'][specification] = {};
      })
      break;
    default:
      category.forEach(currentCategory => {
        perso[currentCategory] = '';
      })
  }
}

function createEmptyPerso() {
  const perso = {};

  perso['dateNaissance'] = new Date();
  perso['stats'] = {};
  perso['equipement'] = {};
  perso['note'] = {};

  const characterTab = ['id', 'genre', 'armure', 'nom', 'surnom', 'nomIA', 'archetype', 'hautFait', 'section', 'avantages', 'inconvenients', 'motivationMajeure', 'motivationsMineures', 'langues', 'bio'];
  const aspectTab = ['chair', 'bete', 'machine', 'dame', 'masque'];
  const caracTab = ['deplacement', 'force', 'endurance', 'hargne', 'combat', 'instinct', 'tir', 'savoir', 'technique', 'aura', 'parole', 'sangFroid', 'discretion', 'dexterite', 'perception'];
  const equipementTab = ['favoris', 'arme', 'module', 'capacite', 'pack'];

  setDefaultPersoValues(perso, false, characterTab);
  setDefaultPersoValues(perso, true, 'stats', aspectTab);
  setDefaultPersoValues(perso, false, 'stats', caracTab);
  setDefaultPersoValues(perso, false, 'equipement', equipementTab);

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

  return perso;
}