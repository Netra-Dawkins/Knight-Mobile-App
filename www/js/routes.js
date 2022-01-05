
var routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/personnage-creation/',
    url: './pages/personnageCreation.html',
    on: {
      pageInit: function init(e, page) {
        personnageCreationInit();
      }
    }
  },
  {
    path: '/stats/',
    componentUrl: './pages/stats.html',
    on: {
      pageInit: function init(e, page) {
        statsInit();
      }
    }
  },
  {
    path: '/stuff/',
    componentUrl: './pages/stuff.html',
    on: {
      pageInit: function init(e, page) {
        stuffInit();
      }
    }
  },
  {
    path: '/equipement-new/',
    url: './pages/equipementNew.html',
    on: {
      pageInit: function init(e, page) {
        equipementCreationInit();
      }
    }
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    componentUrl: './pages/dynamic-route.html',
  },
  {
    path: '/home',
    componentUrl: './pages/home.html',
    on: {
      pageInit: function init(e, page) {
        homeInit();
      },
    }
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
