/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    apiUrl: 'https://tiy-tn-class-api-fall-16.herokuapp.com/api/punch',
    DS: {
      host: 'https://tiy-tn-class-api-fall-16.herokuapp.com',
      namespace: 'json-api/punch',
    },
    modulePrefix: 'punchstarter',
    environment,
    rootURL: '/',
    locationType: 'auto',

    'ember-simple-auth': {
      routeAfterAuthentication: 'admin',

      authorizer: 'authorizer:token',
    },

    'ember-simple-auth-token': {
      serverTokenEndpoint: 'https://tiy-tn-class-api-fall-16.herokuapp.com/api/token',
      tokenPropertyName: 'access_token',
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
