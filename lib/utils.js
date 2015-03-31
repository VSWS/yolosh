/**
 * Created by tungtouch on 3/31/15.
 */
allowIsCollectionAdmin = function(userId, collection) {
	return _.contains(_.pluck(_.where(collection.members, {isAdmin: true}), 'userId'), userId);
};

allowIsCollectionMember = function(userId, collection) {
	return _.contains(_.pluck(collection.members, 'userId'), userId);
};

isServer = function(callback) {
	return Meteor.isServer && callback();
};
