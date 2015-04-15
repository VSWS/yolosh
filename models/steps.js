/**
 * Created by tungtouch on 3/27/15.
 */

Steps = new Mongo.Collection('steps');

// Allow
Steps.allow({
	insert: function (userId, doc) {

	}
});

