/**
 * Created by tungtouch on 4/2/15.
 */
isServer(function () {
    Meteor.startup(function () {
        // Config cho
        ServiceConfiguration.configurations.upsert(
            { service: "facebook" },
            {
                $set: {
                    clientId: Meteor.settings.loginServices.facebook.appId,
                    loginStyle: "popup",
                    secret: Meteor.settings.loginServices.facebook.secret
                }
            }
        );

        // xin quyền login Facebook

    })
});