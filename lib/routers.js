/**
 * Created by tungtouch on 3/27/15.
 */
Collections = new Mongo.Collection('collections');

Router.configure({
	layoutTemplate: 'AppLayout',
	notFoundTemplate: 'notFound'
});

Router.map(function () {

	this.route('/', {
		name: "home"
	});

	this.route('/collections', {
		name: "collections",
		template: 'collections',
		onWait: function () {
			return Meteor.subscribe('pubCollections');
		},
		data: function () {
			return Collections.find().fetch();
		}
	});

});
