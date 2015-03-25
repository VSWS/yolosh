/**
 * Created by tungtouch on 3/26/15.
 */

Router.route('/node', {
	controller: 'NodeController',
	action: 'index'
});

if (Meteor.isClient) {

	NodeController = RouterControler.extend({
		index: function () {
			this.render('NodeIndex');
		}
	});

}