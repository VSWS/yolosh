/**
 * Created by tungtouch on 3/27/15.
 */
Router.route('/', {
	name: "Collection",
	action: function () {
		this.render('collections', {
			data: function () {
				return {title: "Title Collection"}
			}
		});
	}
});