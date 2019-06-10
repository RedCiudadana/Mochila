'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'mochila',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' www.google-analytics.com",
      'font-src': "'self'",
      'connect-src': "'self' www.google-analytics.com",
      'img-src': "'self'",
      'style-src': "'self'",
      'media-src': "'self'"
    },

    metricsAdapters: [{
      name: 'GoogleAnalytics',
      environments: ['production', 'development'],
      config: {
        id: 'UA-132238237-1',
        // Use verbose tracing of GA events
        trace: environment === 'development',
        // Ensure development env hits aren't sent to GA
        sendHitTask: environment !== 'development',
        // Specify Google Analytics plugins
        // require: ['ecommerce']
      }
    }],

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
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
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.ifa = {
      enabled: false,
      inline: false,
    };

    // ENV.fingerprint = {
    //   enabled: true, // set to true only in required environments
    //   generateAssetMap: true,
    //   fingerprintAssetMap: true
    // };

    // ENV.rootURL = '/Mochila';
  }

  return ENV;
};
