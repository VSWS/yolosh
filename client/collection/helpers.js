/**
 * Created by tungtouch on 4/1/15.
 */


if (Meteor.isClient) {
	// This code only runs on the client
	Template.collections.helpers({
		collections: function () {
			// If hide completed is checked, filter tasks
			return Collections.find();
		},
		incompleteCount: function () {
			return Collections.find().count();
		}
	});
}