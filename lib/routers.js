/**
 * Created by tungtouch on 3/27/15.
 * Tips use IRON-Router: http://www.manuel-schoebel.com/blog/iron-router-tutorial
 */


Router.configure({
	layoutTemplate: 'AppLayout',
	notFoundTemplate: 'NotFound',
	loadingTemplate: 'Loading'
});

Router.map(function () {

	this.route('home', {
		path: '/',
		controller: 'HomeCtrl'
	});

	// Collections Router
	this.route('collections', {
		path: '/collections',
		name: 'collections.all',
		controller: 'CollectionCtrl'
	});

	this.route('collectionId', {
		path: '/collection/:id',
		name: 'collection.id',
		controller: 'CollectionIdCtrl'
	});

	// Steps Router
	this.route('steps', {
		path: '/steps',
		controller: 'StepCtrl'
	});

	this.route('stepId', {
		path: '/step/:id',
		controller: 'StepCtrl'
	});

	// Nodes Router
	this.route('nodes', {
		path: '/nodes',
		controller: 'NodeCtrl'
	});

	this.route('nodeId', {
		path: '/node/:id',
		controller: 'NodeCtrl'
	});


});
