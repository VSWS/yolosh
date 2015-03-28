/**
 * Created by tungtouch on 3/27/15.
 */
Collections = new Mongo.Collection('collections');

Collections.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: "Name Collection",
		max: 100
	},
	description: {
		type: String,
		label: "Description Collection",
		max: 300
	},
	visibility: {
		type: String,
		label: "Visibility Collection",
		allowedValues: ['public', 'private']
	},
	licsence: {
		type: String,
		label: "Licsence Collection"
	},
	slug: {
		type: String,
		label: "Slug Collection"
	},
	archived: {
		type: Boolean,
		label: "Archived Collection"
	},
	owner: {
		type: String,
		label: "Owner Collection"
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

