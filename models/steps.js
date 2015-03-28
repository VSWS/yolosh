/**
 * Created by tungtouch on 3/27/15.
 */

Steps = new Mongo.Collection('steps');

Steps.attachSchema(new SimpleSchema({
	title : {
		type: String,
		max: 200
	}
}));