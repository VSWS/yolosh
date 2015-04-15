/**
 * Created by tungtouch on 4/1/15.
 */

if (Meteor.isClient) {

    Meteor.subscribe('collections');

    CollectionCtrl = RouteController.extend({

        data: function () {
            console.log("Data Collection:", Collections.find().fetch());
            return { collections: Collections.find().fetch() };
        },
        waitOn: function () {
            return Meteor.subscribe('collections');
        },
        action: function () {
            if (!this.ready()) {
                this.render('loading');
            }
            else {
                this.render('CollectionsLeft', {to: 'panel-left'});
                this.render('Collections');
            }
        }
    });

}