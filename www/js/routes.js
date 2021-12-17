
var routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/home',
    url: './pages/home.html',
    // on: {
    //   pageAfterIn: function test(e, page) {
    //     console.log('ok!');
    //   },
    //   pageInit: function test2(e, page) {
    //     console.log('ok2!');
    //   }
    // }
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
    url: './pages/stats.html',
  },
  {
    path: '/stuff/',
    url: './pages/stuff.html',
    on: {
      pageInit: function init(e, page) {
        stuffInit();
      }
    }
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    componentUrl: './pages/dynamic-route.html',
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function ({ router, to, resolve }) {
      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = to.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/request-and-load.html',
          },
          {
            props: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
