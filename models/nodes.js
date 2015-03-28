/**
 * Created by tungtouch on 3/27/15.
 */
Nodes = new Mongo.Collection('nodes');

Nodes.attachSchema(new SimpleSchema({
	content : {
		type: String
	},
	createdAt: {
		type: Date,
		denyUpdate: true
	},
	modifiedAt: {
		type: Date,
		denyInsert: true,
		optional: true
	}
}));