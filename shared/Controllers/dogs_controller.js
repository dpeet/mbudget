BudgetItemController = RouteController.extend({
    subscriptions: function () {
        Meteor.subscribe("BudgetItems", Meteor.userId());

    },
    data: function () {
        return Dogs.findOne({_id: this.params._id});
    },
    list: function() {
        this.render("Budget");
    }, 
});