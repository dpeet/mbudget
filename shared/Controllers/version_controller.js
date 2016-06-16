VersionController = RouteController.extend({
    subscriptions: function () {
    },
    version: function() {
        this.render("version");
    }
});