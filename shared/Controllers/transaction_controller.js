TransactionController = RouteController.extend({
    subscriptions: function () {
        Meteor.subscribe("Transactions", Meteor.userId());
        Meteor.subscribe("Transactions", Meteor.userId());
        Meteor.subscribe("user_data", Meteor.userId());

    },
    data: function () {
        return Transactions.findOne({_id: this.params._id});
    },
    insert: function () {
        this.render("InsertTransaction");
    },
    list: function() {
        this.render("TransactionList");
    },
    edit: function() {
        // SimpleSchema.debug = true;
        this.render("editTransaction");
    },
 
});