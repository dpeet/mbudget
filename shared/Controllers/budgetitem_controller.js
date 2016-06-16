BudgetItemController = RouteController.extend({
    subscriptions: function () {
        Meteor.subscribe("BudgetItems", Meteor.userId());
        Meteor.subscribe("user_data", Meteor.userId());

    },
    data: function () {
        return BudgetItems.findOne({_id: this.params._id});
    },
    insert: function () {
        SimpleSchema.debug = true
        this.render("InsertBudgetItem");
    },
    list: function() {
        this.render("BudgetList");
    },
    edit: function() {
        // SimpleSchema.debug = true;
        this.render("editBudgetItem");
    },
 
});