// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['zoo_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors:true,
    defaultTimeoutInterval: 30000
  }
};


