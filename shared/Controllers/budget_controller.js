BudgetController = RouteController.extend({
    subscriptions: function () {
        Meteor.subscribe("Budgets", Meteor.userId());
        Meteor.subscribe("BudgetItems", Meteor.userId());
        Meteor.subscribe("Transactions", Meteor.userId());
        Meteor.subscribe("user_data", Meteor.userId());

    },
    data: function () {
        return Budgets.findOne({_id: this.params._id});
    },
    insert: function () {
        SimpleSchema.debug = true
        this.render("InsertBudgets");
    },
    edit: function() {
        // SimpleSchema.debug = true;
        this.render("editBudgets");
    },

});
