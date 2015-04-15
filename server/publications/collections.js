/**
 * Created by tungtouch on 3/27/15.
 */

Meteor.publish('collections', function () {
    return Collections.find();
});