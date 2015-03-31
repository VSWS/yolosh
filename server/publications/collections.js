/**
 * Created by tungtouch on 3/27/15.
 */
if (Meteor.isServer) {
	Meteor.publish('pubCollections', function () {
		check(this.userId, String);
		return Collections.find().fetch();
	})
}