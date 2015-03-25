Package.describe({
  name: 'yolosh:node',
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
  api.versionsFrom('1.0.4.1');

	// use side server
	api.use(['aldeed:collection2', 'iron:router']);

	// use client
	//api.use();

	// add Server
  api.addFiles(['server/node.js','lib/nodeController.js']);
	//api.export(['Nodes']);

	// add client
	//api.addFiles('lib/nodeController.js', ['client']);

});


//
//Package.onTest(function(api) {
//  api.use('tinytest');
//  api.use('yolosh:node');
//  api.addFiles('node-tests.js');
//});
