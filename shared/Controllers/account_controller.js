AccountController = RouteController.extend({
    subscriptions: function () {
        Meteor.subscribe("user_data", Meteor.userId());
    },
    edit_settings: function () {
        this.render("account_settings");
    },
    support: function () {
        this.render("supportEmail");
    }
});

