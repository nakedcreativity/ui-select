Package.describe({
  name: 'nakedcreativity:ui-select',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'Fork of angular-ui-select adding null item option to dropdown',
  // URL to the Git repository containing the source code for this package.
  git: 'http://github.com/nakedcreativity/ui-select',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('dist/select.js', 'client');
  api.addFiles('dist/select.css', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('nakedcreativity:ui-select', 'client');
  api.addFiles('test/select.spec.js', 'client');
});
