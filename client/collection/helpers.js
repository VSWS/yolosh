/**
 * Created by tungtouch on 4/1/15.
 */


if (Meteor.isClient) {
    
    Meteor.subscribe('listCollect');
    
	// This code only runs on the client
	Template.collections.helpers({
		collections: function () {
			// If hide completed is checked, filter tasks
			return Collections.find();
		},
        ngas: function() {
            return Collections.find();
        },
        tasks: [
            {title: 'hehe'},
            {title: 'hihi'},
            {title: 'haha'}
        ],
		incompleteCount: function () {
			return Collections.find().count();
		}
	});
}
