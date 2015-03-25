/**
 * Created by tungtouch on 3/25/15.
 */

Router.route('/', function () {
	this.render('Home', {
		data: function () { }
	});
});

Router.router('/collections', function () {
	this.render('Collections', {
		data: function () {

		}
	})
});