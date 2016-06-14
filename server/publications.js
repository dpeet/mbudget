Meteor.publish('budgetItem', function () {
    var currentUserId = this.userId;
    if (!this.userId) {
        this.ready();
        return;
    }
    return BudgetItems.find({createdBy: currentUserId})
});
