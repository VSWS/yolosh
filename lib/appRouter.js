/**
 * Created by tungtouch on 3/25/15.
 */

if (Meteor.isServer) {

	Router.map(function () {
		return this.route("reloadDB", {
			where: "server",
			path: "/admin/reloadAll",
			action: function () {
				var data, obj;
				Lessons.setup();
				Cards.reload();
				Examples.reload();
				Vocab.reload();
				PlayerTasks.remove({});
				UserCards.remove({});
				obj = {
					cards: Cards.find().count(),
					lessons: Lessons.find().count(),
					examples: Examples.find().count(),
					vocab: Vocab.find().count(),
					result: 'done'
				};
				data = JSON.stringify(obj);
				this.response.writeHead(200, {
					'Content-Type': 'application/json'
				});
				this.response.end(data);
				return console.log("reloadAll", data);
			}
		})
	});

}

if (Meteor.isClient) {

	Router.configure({
		layoutTemplate: "MainLayout2"
	});

	Router.map(function () {

		this.route("home", {
			where: "client",
			path: "/",
			data: function (){
				return {
					title : "Home title"
				}
			},
			action: function () {
				this.render('');
			}
		});

		this.route("collection", {

		});

		this.route("node", {

		});


	})
}
