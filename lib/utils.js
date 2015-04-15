/**
 * Created by tungtouch on 3/31/15.
 */
// Cho phép Admin của Collection được thao tác
allowIsCollectionAdmin = function(userId, collection) {
	return _.contains(_.pluck(_.where(collection.members, {isAdmin: true}), 'userId'), userId);
};

// Cho phép các Member của Collection được thao tác
allowIsCollectionMember = function(userId, collection) {
	return _.contains(_.pluck(collection.members, 'userId'), userId);
};

// Callback isServer
isServer = function(callback) {
	return Meteor.isServer && callback();
};
