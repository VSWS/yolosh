Package.describe({
  name: 'layout',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.2');

	//api.use(['iron:router','templating','blaze']);
	//api.use(['templating'], 'client');

	api.addFiles('client/mainLayout.html', 'client');
	//api.addFiles('client/layout.js', 'client');

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('layout');
  api.addFiles('layout-tests.js');
});
