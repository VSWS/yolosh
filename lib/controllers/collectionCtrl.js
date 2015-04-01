/**
 * Created by tungtouch on 4/1/15.
 */
if (Meteor.isClient) {

Meteor.subscribe('collections');

    CollectionCtrl = RouteController.extend({

        data: function () {
            return Collections.find();
        },
        data: function () {
            return Collections.find()
        },
        action: function () {
            if (!this.ready()) {
                this.render('loading');
            }
            else {
                this.render();
            }
        }
    });

}