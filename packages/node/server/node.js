// Write your package code here!
Nodes = new Mongo.Collection('Nodes');

Nodes.attachSchema(
	new SimpleSchema({

		title: {
			type: String,
			label: "Title",
			max: 200
		},
		author: {
			type: String,
			label: "Author"
		},
		summary: {
			type: String,
			label: "Brief summary",
			optional: true,
			max: 1000
		}

	})
);

//Nodes.insert({title: "Nodes Title", author: "Tung Touch", summary: "Sumary Node"}, function(error, result) {
//
//	if (error) {
//		console.log("Error Insert", error);
//	}
//	console.log("Result:", result);
//
//});